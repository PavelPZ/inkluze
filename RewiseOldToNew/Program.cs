using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rewiseOldToNew {
  class Program {
    static void Main(string[] args) {
      publishersAuthor();
      //vocabularies();
    }

    static string[] titleWrongStarts = new string[] { "Francouzština: ", "Němčina: ", "Španělština: " };

    static void publishersAuthor() {
      Action<bool, string> adjustPublisher = (isLM, name) => {
        var editorId = isLM ? lib.langmasterEditorId : lib.otherEditorId; var author = isLM ? lib.langmasterEmail : lib.otherEmail;
        var res = new Publisher {EditorId = editorId, Author = author, Name = name };
        var fn = lib.destDir + editorId + "\\" + author + "\\publ\\" + name;
        JsonUtils.ObjectToFile(fn + ".json", res, true, true); //adjust file dir = true
        JsonUtils.ObjectToFile(fn + ".js", res);
      };
      Action<bool> adjustAuthor = (isLM) => {
        var editorId = isLM ? lib.langmasterEditorId : lib.otherEditorId; var author = isLM ? lib.langmasterEmail : lib.otherEmail;
        var res = new Author { EditorId = editorId, EMail = author};
        var fn = lib.destDir + editorId + "\\" + author + "\\author";
        JsonUtils.ObjectToFile(fn + ".json", res, true, true); //adjust file dir = true
        JsonUtils.ObjectToFile(fn + ".js", res);
      };
      adjustAuthor(true);
      adjustAuthor(false);
      adjustPublisher(true, "eurotalk");
      adjustPublisher(true, "langmaster");
      adjustPublisher(false, "cambridge");
      adjustPublisher(false, "oxford");
      adjustPublisher(false, "heinle");
      adjustPublisher(false, "unknown");
    }

    static void vocabularies() {
      var res = lib.readSources(); //short lmId = 1; short otherId = 1;
      foreach (var b in res.Folders.Cast<Book>()) {
        b.SourceLang = lib.LineIdToLang(b.LineId);

        var prefix = titleWrongStarts.FirstOrDefault(s => b.Title.StartsWith(s));
        if (prefix != null) b.Title = b.Title.Substring(prefix.Length);

        if (b.Licence == CreativeCommonLic.unknown) b.Licence = CreativeCommonLic.cc_by_nd;

        if (b.Perex != null) {
          b.Perex = b.Perex.Split(':').Last().Trim();
          if (b.Perex == b.Title) b.Perex = null;
        }
        var title = b.Title.ToLower();
        if (title.IndexOf("eurotalk") > 0) {
          b.BookPublisherId = lib.langmasterPublisherPrefix + "eurotalk";
          //b.Id = lmId++;
          b.EditorId = lib.langmasterEditorId;
          b.AdminEMail = lib.langmasterEmail;
        } else if (title.IndexOf("langmaster") >= 0) {
          b.BookPublisherId = lib.langmasterPublisherPrefix + "langmaster";
          b.EditorId = lib.langmasterEditorId;
          b.AdminEMail = lib.langmasterEmail;
          //b.Id = lmId++;
        } else if (title.IndexOf("cambridge") >= 0) {
          b.BookPublisherId = lib.otherPublisherPrefix + "cambridge";
          b.EditorId = lib.otherEditorId;
          b.AdminEMail = lib.otherEmail;
          //b.Id = otherId++;
        } else if (title.IndexOf("chatterbox") >= 0 || title.IndexOf("headway") >= 0 || title.IndexOf("open doors") >= 0) {
          b.BookPublisherId = lib.otherPublisherPrefix + "oxford";
          b.EditorId = lib.otherEditorId;
          b.AdminEMail = lib.otherEmail;
          //b.Id = otherId++;
        } else if (title.IndexOf("on y va") >= 0) {
          b.BookPublisherId = lib.otherPublisherPrefix + "heinle";
          b.EditorId = lib.otherEditorId;
          b.AdminEMail = lib.otherEmail;
          //b.Id = otherId++;
        } else {
          b.BookPublisherId = lib.otherPublisherPrefix + "unknown";
          b.EditorId = lib.otherEditorId;
          b.AdminEMail = lib.otherEmail;
         // b.Id = otherId++;
        }

        b.Author = b.AdminEMail;

        short wordIds = 1;
        b.Lessons = b.Folders.Cast<Lesson>().ToArray(); b.Folders = null;
        foreach (var l in b.Lessons) {
          l.Id = wordIds++;
          foreach (var f in l.SrcFacts) { f.Id = wordIds++; f.Sides = f.Answer; }
        }

        var fn = lib.destDir + b.EditorId + "\\" + b.Author + "\\voc\\" + b.Name;
        JsonUtils.ObjectToFile(fn + ".json", b, true, true); //adjust file dir = true
        JsonUtils.ObjectToFile(fn + ".js", b);

        b.Lessons = null;
        var imgPath = lib.imgDirPath + b.Name + ".jpg";
        if (File.Exists(imgPath)) b.Img = LowUtils.encodeImgSrc(imgPath);
        JsonUtils.ObjectToFile(fn + ".meta.js", b);
      }

      //File.WriteAllText(@"D:\LMCom\inkluze\RewiseOldToNew\App_Data\metaToEdit.xml", XmlUtils.ObjectToString(res));
    }

  }
}
