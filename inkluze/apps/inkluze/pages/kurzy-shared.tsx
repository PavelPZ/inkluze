interface IKurzyTemplate {
  id: string;
  title: string;
  courseLink: string;
  area: string;
  defaultPrice: string;
  lecturer: string;
  location: string;
  defaultNote?: string;
}

interface IKurzyRun {
  id: string;
  templateId: string;
  date: string;
  dateLabel?: string;
  detailNote?: string;
  isPublished: boolean;
  priceOverride?: string;
  lecturerOverride?: string;
  noteOverride?: string;
  signupEnabled?: boolean;
}

interface IKurzyPayload {
  courseTemplates: IKurzyTemplate[];
  courseRuns: IKurzyRun[];
}

function kurzyLoadData(onDone: (payload: IKurzyPayload) => void, onError: (msg: string) => void) {
  var req = new XMLHttpRequest();
  req.open('GET', '/libs/service-kurzy/kurzy.ashx', true);
  req.onreadystatechange = () => {
    if (req.readyState !== 4) return;
    if (req.status >= 200 && req.status < 300) {
      try {
        onDone(JSON.parse(req.responseText) as IKurzyPayload);
      } catch (e) {
        onError('Nepodařilo se zpracovat data kurzů.');
      }
    } else {
      onError('Nepodařilo se načíst seznam kurzů.');
    }
  };
  req.send();
}

function kurzyFormatDate(isoDate: string): string {
  if (!isoDate || isoDate.length < 10) return isoDate;
  var p = isoDate.split('-');
  if (p.length !== 3) return isoDate;
  return parseInt(p[2], 10) + '.' + parseInt(p[1], 10) + '. ' + p[0];
}

function kurzyNormalizeText(s: string): string {
  if (!s) return '';
  var lower = s.toLocaleLowerCase ? s.toLocaleLowerCase('cs') : s.toLowerCase();
  return lower
    .replace(/[áàä]/g, 'a').replace(/[čć]/g, 'c').replace(/[ď]/g, 'd')
    .replace(/[éèěë]/g, 'e').replace(/[íìï]/g, 'i').replace(/[ň]/g, 'n')
    .replace(/[óòö]/g, 'o').replace(/[ř]/g, 'r').replace(/[šś]/g, 's')
    .replace(/[ť]/g, 't').replace(/[úùůü]/g, 'u').replace(/[ýÿ]/g, 'y')
    .replace(/[žź]/g, 'z');
}

function kurzyFormatAreaLabel(s: string): string {
  if (!s) return s;
  var trimmed = s.replace(/^\s+|\s+$/g, '');
  if (!trimmed) return trimmed;
  var first = trimmed.charAt(0).toLocaleUpperCase ? trimmed.charAt(0).toLocaleUpperCase('cs') : trimmed.charAt(0).toUpperCase();
  return first + trimmed.slice(1);
}

function kurzyMatchesQuery(text: string, query: string): boolean {
  if (!query) return true;
  return kurzyNormalizeText(text).indexOf(kurzyNormalizeText(query)) >= 0;
}

function kurzyCollectAreas(items: Array<{ area?: string }>): string[] {
  var seen: { [key: string]: string } = {};
  items.forEach(t => {
    if (!t.area) return;
    t.area.split(',').forEach(part => {
      var raw = part.replace(/^\s+|\s+$/g, '');
      if (!raw) return;
      var key = kurzyNormalizeText(raw);
      if (!seen[key]) seen[key] = kurzyFormatAreaLabel(raw);
    });
  });
  var areas: string[] = [];
  for (var k in seen) areas.push(seen[k]);
  areas.sort((a, b) => a.localeCompare(b, 'cs'));
  return areas;
}

function kurzyTemplateMatchesArea(template: IKurzyTemplate, areaFilter: string): boolean {
  if (!areaFilter) return true;
  if (!template.area) return false;
  return kurzyNormalizeText(template.area).indexOf(kurzyNormalizeText(areaFilter)) >= 0;
}

interface IKurzyFilterBarProps {
  query: string;
  area: string;
  areas: string[];
  onQueryChange: (q: string) => void;
  onAreaChange: (a: string) => void;
  extra?: JSX.Element;
}

var KurzyFilterBar: React.StatelessComponent<IKurzyFilterBarProps> = (props) => <div className='row' style={{ marginBottom: '15px' }}>
  <div className='col-md-6'>
    <FormGroup>
      <ControlLabel>Hledat kurz</ControlLabel>
      <FormControl
        type='text'
        placeholder='Název, lektor…'
        value={props.query}
        onChange={(e: any) => props.onQueryChange(e.target.value)}
      />
    </FormGroup>
  </div>
  <div className='col-md-4'>
    <FormGroup>
      <ControlLabel>Oblast</ControlLabel>
      <FormControl
        componentClass='select'
        value={props.area}
        onChange={(e: any) => props.onAreaChange(e.target.value)}
      >
        <option value=''>Všechny oblasti</option>
        {props.areas.map(a => <option key={a} value={a}>{a}</option>)}
      </FormControl>
    </FormGroup>
  </div>
  <div className='col-md-2'>
    {props.extra || null}
  </div>
</div>;
