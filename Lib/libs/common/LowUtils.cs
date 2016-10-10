using System;
using System.IO;
using System.Xml.Serialization;
using json = Newtonsoft.Json;

public static class XmlUtils {

  static public T FileToObject<T>(string fileName) {
    try {
      XmlSerializer serializer = new XmlSerializer(typeof(T));
      using (TextReader reader = new StreamReader(fileName))
        return (T)serializer.Deserialize(reader);
    } catch (Exception exp) {
      throw new Exception(fileName, exp);
    }
  }
  static public void ObjectToFile(string fileName, object xmlObject) {
    XmlSerializer serializer = new XmlSerializer(xmlObject.GetType());
    using (TextWriter writer = new StreamWriter(fileName))
      serializer.Serialize(writer, xmlObject);
  }

  static public T StringToObject<T>(string s) where T : class {
    if (String.IsNullOrEmpty(s)) return null;
    try {
      using (StringReader reader = new StringReader(s))
        return (T)new XmlSerializer(typeof(T)).Deserialize(reader);
    } catch (Exception exp) {
      throw new Exception(exp.Message + "   " + s, exp);
    }
  }

  static public string ObjectToString(object xmlObject) {
    return xmlObject == null ? null : ObjectToString(xmlObject, xmlObject.GetType());
  }

  static public string ObjectToString(object xmlObject, Type type) {
    using (StringWriter writer = new StringWriter()) {
      new XmlSerializer(type).Serialize(writer, xmlObject);
      return writer.ToString();
    }
  }

}

public static class LowUtils {
  public static void AdjustFileDir(string fileName) {
    string dir = Path.GetDirectoryName(fileName);
    if (!Directory.Exists(dir)) Directory.CreateDirectory(dir);
  }
  public static string encodeImgSrc(string fileName) {
    fileName = fileName.ToLower();
    var ext = Path.GetExtension(fileName).Substring(1);
    return @"data:image/" + ext + ";base64," + Convert.ToBase64String(File.ReadAllBytes(fileName));
  }

}

public static class JsonUtils {
  static public T FileToObject<T>(string fileName) {
    try {
      return json.JsonConvert.DeserializeObject<T>(File.ReadAllText(fileName));
    } catch (Exception exp) {
      throw new Exception(fileName, exp);
    }
  }
  static public void ObjectToFile(string fileName, object xmlObject, bool indent = false, bool adjustDir = false) {
    if (adjustDir) LowUtils.AdjustFileDir(fileName);
    File.WriteAllText(fileName, ObjectToString(xmlObject, indent));
  }

  static json.JsonSerializerSettings settings = new json.JsonSerializerSettings() { DefaultValueHandling=json.DefaultValueHandling.Ignore};

  static public T StringToObject<T>(string s) where T : class {
    return json.JsonConvert.DeserializeObject<T>(s);
  }

  static public string ObjectToString(object xmlObject, bool indent = false) {
    return json.JsonConvert.SerializeObject(xmlObject, indent ? json.Formatting.Indented : json.Formatting.None, settings);
  }

}