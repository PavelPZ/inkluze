using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Xml.Linq;
using System.Xml.Serialization;
using json = Newtonsoft.Json;

namespace rewiseOldToNew {

  public static class lib {
    static string srcDirPath = @"d:\LMCom\rew\Web4\RwBooks\Texts";
    public static string imgDirPath = @"d:\LMCom\rw\SLRewise\PronuncApp\CoursesTab\Img\";
    public static Folder readSources() {
      List<Book> books = new List<Book>();
      foreach (var fn in Directory.EnumerateFiles(srcDirPath, "*.xml")) {
        var text = File.ReadAllText(fn);
        text = text.Replace("xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"http://www.open-learning-initiative.org\"", null);
        var book = XmlUtils.StringToObject<Book>(text); book.OrigFileName = fn;
        books.Add(book);
        //book.Folders = null;
        //if (fn.IndexOf("tn_czech.xml") > 0) {
        //  voc.Save(@"d:\temp\voc.xml");
        //  break;
        //}
      }
      //Folder res = new Folder() {
      //  Folders = books.GroupBy(bk => bk.LineId).Select(g => new LineRoot() { Line = g.Key, Folders = g.ToArray() }).ToArray()
      //};
      Folder res = new Folder() { Folders = books.ToArray() };
      return res;
    }
    public const string langmasterEditorId = "www.langmaster.cz";
    public const string otherEditorId = "www.rw.ru";

    public const string otherEmail = "voronovbor@rambler.ru";
    public const string langmasterEmail = "rewise@langmaster.cz";

    public const string langmasterPublisherPrefix = langmasterEditorId + "$" + langmasterEmail + "$";
    public const string otherPublisherPrefix = otherEditorId + "$" + otherEmail + "$";

    public const string destDir = @"D:\LMCom\inkluze\RewiseRepository\App_Data\editors-data\";
    public static Langs LineIdToLang(LineIds line) {
      switch (line) {
        #region EuroTalk4
        case LineIds.Afrikaans: return Langs.af_za;
        case LineIds.Albanian: return Langs.sq_al;
        case LineIds.Arabic: return Langs.ar_sa;
        case LineIds.Armenian: return Langs.hy_am;
        case LineIds.Assamese: return Langs.as_in;
        case LineIds.Azerbaijani: return Langs.az_latn_az;
        case LineIds.Basque: return Langs.eu_es;
        case LineIds.Bengali: return Langs.bn_in;
        case LineIds.Portuguese_Brazilian: return Langs.pt_br;
        case LineIds.Breton: return Langs.br_fr;
        case LineIds.Bulgarian: return Langs.bg_bg;
        case LineIds.Bossna: return Langs.bs;
        case LineIds.French: return Langs.fr_fr;
        case LineIds.Cantonese: return Langs.zh_hk;
        case LineIds.Catalan: return Langs.ca_es;
        case LineIds.Corsican: return Langs.co_fr;
        case LineIds.Croatian: return Langs.hr_hr;
        case LineIds.Czech: return Langs.cs_cz;
        case LineIds.Danish: return Langs.da_dk;
        case LineIds.Dutch: return Langs.nl_nl;
        case LineIds.English: return Langs.en_gb;
        case LineIds.Estonian: return Langs.et_ee;
        case LineIds.Farsi: return Langs.fa_ir;
        case LineIds.Finnish: return Langs.fi_fi;
        case LineIds.Galician: return Langs.gl_es;
        case LineIds.Georgian: return Langs.ka_ge;
        case LineIds.German: return Langs.de_de;
        case LineIds.Greek: return Langs.el_gr;
        case LineIds.Hausa: return Langs.ha_latn_ng;
        case LineIds.Hebrew: return Langs.he_il;
        case LineIds.Hungarian: return Langs.hu_hu;
        case LineIds.Hindi: return Langs.hi_in;
        case LineIds.Chinese_Mandarin: return Langs.zh_cn;
        case LineIds.Icelandic: return Langs.is_is;
        case LineIds.Igbo: return Langs.ig_ng;
        case LineIds.Indonesian: return Langs.id_id;
        case LineIds.Irish: return Langs.ga_ie;
        case LineIds.Italian: return Langs.it_it;
        case LineIds.Japanese: return Langs.ja_jp;
        case LineIds.Khmer: return Langs.km_kh;
        case LineIds.Kirghiz: return Langs.ky_kg;
        case LineIds.Korean: return Langs.ko_kr;
        case LineIds.Spanish: return Langs.sp_sp;
        case LineIds.Latvian: return Langs.lv_lv;
        case LineIds.Lithuanian: return Langs.lt_lt;
        case LineIds.Macedonian: return Langs.mk_mk;
        case LineIds.Malay: return Langs.ms_my;
        case LineIds.Malayalam: return Langs.ml_in;
        case LineIds.Maltese: return Langs.mt_mt;
        case LineIds.Maori: return Langs.mi_nz;
        case LineIds.Mongolian: return Langs.mn_mn;
        case LineIds.Occitan: return Langs.oc_fr;
        case LineIds.Norwegian: return Langs.nb_no;
        case LineIds.Pashto: return Langs.ps_af;
        case LineIds.Persian: return Langs.fa_ir;
        case LineIds.Polish: return Langs.pl_pl;
        case LineIds.Portuguese: return Langs.pt_pt;
        case LineIds.Quechua: return Langs.quz_pe;
        case LineIds.Romanian: return Langs.ro_ro;
        case LineIds.Russian: return Langs.ru_ru;
        case LineIds.Serbian: return Langs.sr_latn_cs;
        case LineIds.Sesotho: return Langs.nso_za;
        case LineIds.Slovak: return Langs.sk_sk;
        case LineIds.Slovenian: return Langs.sl_si;
        case LineIds.Swahili: return Langs.sw_ke;
        case LineIds.Swedish: return Langs.sv_se;
        case LineIds.Thai: return Langs.th_th;
        case LineIds.Tibetan: return Langs.bo_cn;
        case LineIds.Tswana: return Langs.tn_za;
        case LineIds.Turkish: return Langs.tr_tr;
        case LineIds.Ukrainian: return Langs.uk_ua;
        case LineIds.Urdu: return Langs.ur_pk;
        case LineIds.Uzbek: return Langs.uz_latn_uz;
        case LineIds.Vietnamese: return Langs.vi_vn;
        case LineIds.Xhosa: return Langs.xh_za;
        case LineIds.Yoruba: return Langs.yo_ng;
        case LineIds.Zulu: return Langs.zu_za;
        case LineIds.Azeri: return Langs.az_latn_az;
        #endregion
        default: throw new Exception();
      }
    }
  }

  public partial class Folder {
    //obsolete
    [json.JsonIgnore]
    [XmlArrayItem(typeof(Folder))]
    [XmlArrayItem(typeof(Lesson))]
    [XmlArrayItem(typeof(Book))]
    //[XmlArrayItem(typeof(LineRoot))]
    public Folder[] Folders;
  }

  public partial class Book : Folder {
    //Obsolete
    [json.JsonIgnore]
    public short Id; //jednoznacne ID pro dany EditorId a AdminEMail
    [json.JsonIgnore]
    public string Group; //nahrazeno PublisherId
    [json.JsonIgnore]
    public Criteria Criteria;
    [json.JsonIgnore]
    public XElement HtmlPerex;
    [json.JsonIgnore]
    public XElement HtmlDescr;
    [json.JsonIgnore]
    public LineIds LineId;
    [json.JsonIgnore]
    public DataType Type;
    [json.JsonIgnore]
    public string OrigFileName;
    [json.JsonIgnore]
    public short Order;
    [json.JsonIgnore]
    public bool IsDefault; //kniha v dane lokalizaci je dulezita a objevuje se na rewise home po zalozeni rewise
    [json.JsonIgnore]
    public Guid BookId;
    [json.JsonIgnore]
    public string AdminEMail; //autor slovnicku
  }

  [Flags]
  public enum Criteria {
    euroTalk = 0x1,
    lm = 0x2,
  }

  public partial class Lesson : Folder {
    //Obsolete
    [json.JsonIgnore]
    public string jsonId; //identifikace odpovidajici lekci kurzu, napr. english1_xl01_shome_dhtm v q:\LMCom\rew\Web4\Schools\EACourses\English_0_1.json
  }

  public partial class SrcFact {
    //Obsolete
    [json.JsonIgnore]
    public FactSide[] Answer;
    [json.JsonIgnore]
    public bool IsPhrase;
  }

  public enum DataType {
    unknown,
    vocabulary,
    vocabularyBuilder,
    dialog,
    soundFile,
  }

  public class FactSide : Locale {
  }

  public class FactSound {
    public FactSide MyFactSide;
    public string Key;
    public string Text;
  }

  public enum LineIds {
    no = 0,
    English = 1,
    German = 2,
    Spanish = 3,
    Italian = 4,
    French = 5,
    Chinese = 6,
    Russian = 7,
    Other = 8,
    MSWord = 9,
    MSExcel = 10,
    MSOutlook = 11,
    MSAccess = 12,
    MSPowerPoint = 13,
    MSVista = 14,
    MSOffice = 15,
    MSEcdl = 16,
    Ucto = 17,
    Fotografie = 18,
    BranaVedeni = 19,
    #region EuroTalk2
    Afrikaans = 20,
    Albanian = 21,
    Arabic = 22,
    Armenian = 23,
    Assamese = 24,
    Azerbaijani = 25,
    Basque = 26,
    Bengali = 27,
    Breton = 28,
    Bulgarian = 29,
    Cantonese = 30,
    Catalan = 31,
    Corsican = 32,
    Croatian = 33,
    Czech = 34,
    Danish = 35,
    Dutch = 36,
    Estonian = 37,
    Finnish = 38,
    Galician = 39,
    Georgian = 40,
    Greek = 41,
    Hausa = 42,
    Hebrew = 43,
    Hungarian = 44,
    Chinese_Mandarin = 45,
    Icelandic = 46,
    Igbo = 47,
    Indonesian = 48,
    Irish = 49,
    Japanese = 50,
    Khmer = 51,
    Kirghiz = 52,
    Korean = 53,
    Latvian = 54,
    Lithuanian = 55,
    Macedonian = 56,
    Malay = 57,
    Malayalam = 58,
    Maltese = 59,
    Maori = 60,
    Mongolian = 61,
    Norwegian = 62,
    Occitan = 63,
    Pashto = 64,
    Persian = 65,
    Polish = 66,
    Portuguese = 67,
    Portuguese_Brazilian = 68,
    Quechua = 69,
    Romanian = 70,
    Serbian = 71,
    Sesotho = 72,
    Slovak = 73,
    Slovenian = 74,
    Swahili = 75,
    Swedish = 76,
    Thai = 77,
    Tibetan = 78,
    Tswana = 79,
    Turkish = 80,
    Ukrainian = 81,
    Urdu = 82,
    Uzbek = 83,
    Vietnamese = 84,
    Xhosa = 85,
    Yoruba = 86,
    Zulu = 87,
    #endregion
    Bossna = 88,
    Belarusian = 89,
    Gujarati = 90,
    Hindi = 91,
    Kannada = 92,
    Tamil = 93,
    Telugu = 94,
    Welsh = 95,
    Farsi = 96, //Persian

    Azeri = 97,
  }


}