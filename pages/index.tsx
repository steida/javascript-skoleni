import '../node_modules/normalize.css/normalize.css';
import Head from 'next/head';

const theme = {
  baseFontSize: 16,
  baseLineHeight: 24,
  colors: {
    background: '#f7f7f7',
    primary: '#0089eb',
    text: '#333',
    textLight: '#fff',
  },
  fontFamily: `system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif`,
};

// http://inlehmansterms.net/2014/06/09/groove-to-a-vertical-rhythm
const fontSizeWithLineHeight = (fontSize: number) => {
  const lines = Math.ceil(fontSize / theme.baseLineHeight);
  return { fontSize, lineHeight: lines * theme.baseLineHeight + 'px' };
};

// Why not zeit/styled-jsx?
// https://twitter.com/estejs/status/1080532009028632577

const containerStyle = {
  margin: 'auto',
  maxWidth: '992px',
  padding: theme.baseFontSize + 'px',
};

const textStyle = {
  ...fontSizeWithLineHeight(theme.baseFontSize),
  color: theme.colors.text,
  fontFamily: theme.fontFamily,
  maxWidth: '42em',
};

const headerStyle = {
  backgroundColor: theme.colors.primary,
  width: '100%',
};

const boldStyle = {
  fontWeight: 700,
};

const headerLinkStyle = {
  ...textStyle,
  ...boldStyle,
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  color: theme.colors.textLight,
  display: 'inline-block',
  padding: '16px',
};

const bodyStyle = {
  paddingTop: theme.baseLineHeight * 3 + 'px',
};

const marginBottomStyle = {
  marginBottom: theme.baseLineHeight + 'px',
};

const marginTopStyle = {
  marginTop: theme.baseLineHeight * 2 + 'px',
};

const linkStyle = {
  color: theme.colors.primary,
};

const linkButtonStyle = {
  ...textStyle,
  backgroundColor: theme.colors.primary,
  borderRadius: '4px',
  color: theme.colors.textLight,
  fontSize: '14px',
  paddingBottom: theme.baseLineHeight / 4 + 'px',
  paddingLeft: theme.baseLineHeight / 2 + 'px',
  paddingRight: theme.baseLineHeight / 2 + 'px',
  paddingTop: theme.baseLineHeight / 4 + 'px',
  textDecoration: 'none',
};

const heading1Style = {
  ...textStyle,
  ...fontSizeWithLineHeight(32),
  ...boldStyle,
  ...marginBottomStyle,
};

const heading2Style = {
  ...heading1Style,
  ...fontSizeWithLineHeight(24),
  ...marginTopStyle,
};

const heading3Style = {
  ...heading2Style,
  ...fontSizeWithLineHeight(18),
};

const paragraphStyle = {
  ...textStyle,
  ...marginBottomStyle,
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <a style={headerLinkStyle} href="#verejne-kurzy">
        Veřejné kurzy
      </a>
      <a style={headerLinkStyle} href="#pro-firmy">
        Pro firmy
      </a>
      <a style={headerLinkStyle} href="#kontact">
        Kontakt
      </a>
      <a style={headerLinkStyle} href="#reference">
        Reference
      </a>
    </div>
  );
};

const Body: React.FunctionComponent = props => {
  return <div style={bodyStyle}>{props.children}</div>;
};

const RegisterLinkButton: React.FunctionComponent<{
  date: string;
}> = props => {
  return (
    <>
      <div style={paragraphStyle}>
        Nejbližší termín: <b>{props.date}</b>
      </div>
      <div style={paragraphStyle}>
        <a href="#mam-zajem" style={linkButtonStyle}>
          Mám zájem
        </a>
      </div>
    </>
  );
};

const recommendations = [
  {
    link: 'https://twitter.com/pajasevi/status/663129231837282304',
    text: `That said, musim uznat ze skoleni od @steida mi otevrelo oci. Najednou React, Flux, functional programming atd. davaji smysl. Doporucuju`,
  },
  {
    link: 'https://www.zdrojak.cz/clanky/jake-webexpo-2014',
    text: `Pokud chcete s izomorfními aplikacemi začít, pak doporučují projít Danovu prezentaci z letošního WebExpa, kde najdete mnoho odkazů na to nejlepší, co je momentálně k dispozici. Pro mě osobně byla Danova přednáška nejlepší z těch, které jsem letos navštívil.`,
  },
  {
    link: 'http://gmchk.cz/clanky/nase-postrehy-z-webexpo-2011/',
    text: `Nejvíc nás zaujaly přednášky týkající se JavaScriptu. Zejména výborná „Za hranicemi jQuery“ od Daniela Steigerwalda, která jenom potvrdila správnost našeho rozhodnutí pozvat si Dana na školení JavaScriptu do naší firmy.`,
  },
  {
    link: 'https://php.vrana.cz/webexpo-2011.php',
    text: `Danovi Steigerwaldovi se na přednášce podařilo ukázat, že se v JavaScriptovém vývoji opravdu dobře orientuje a část svých znalostí dokázal předat i publiku.`,
  },
  {
    link: 'https://cz.linkedin.com/in/steigerwalddaniel',
    text: `Dan Steigerwald je bez debat naprostá česká špička mezi programátory v JavaScriptu. Rozhledem i schopnostmi výrazně přesahuje "jen výborné" JavaScriptaře. Navíc dokáže o problematice mluvit, přednášet a psát nejen zasvěceně, ale i srozumitelně a s nadhledem, který českým IT odborníkům obvykle velmi bolestně chybí.`,
  },
  {
    link: 'https://twitter.com/tonovotny/status/187585293166182402',
    text: `Javascript skoleni u @steida je skvely a nekompromisni, vsichni tu vydrzi az do rana :)`,
  },
  {
    link: 'https://twitter.com/PetrBurian/status/187800507832741890',
    text: `JS školení od @steida bylo nad očekávání. Získal jsem cenný přehled technologií, postupů, názvosloví.`,
  },
  {
    link: 'https://twitter.com/jindrichsamec/status/152783195715272705',
    text: `Už je to nějaký pátek, co jsem byl na školení JS od @steida a stále jsem z toho nadšen! :)`,
  },
  {
    link: 'https://twitter.com/rdresler/status/187268778453766145',
    text: `Fotbalový kouzelník Messi nebo webexpo přednáška od javascriptového mága @steida? Sledoval jsem to souběžně a oba podali výborný výkon!`,
  },
  {
    link: 'https://twitter.com/dcorbacho/status/471964797991649281',
    text: `Yes, yes, yes. Great presentation about the upcoming #JavaScript features / tools.`,
  },
];

const Index = () => {
  return (
    <>
      <Head>
        <title>Školení JavaScript, React, Este.js – Daniel Steigerwald</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={containerStyle}>
        <Header />
        <Body>
          <div style={heading1Style}>Naučím vás nejen JavaScript a React</div>
          <div style={paragraphStyle}>
            Jmenuji se Daniel Steigerwald a všechna školení vedu osobně. Přes
            deset let pomáhám firmám i jednotlivcům tvořit lepší software.{' '}
            <a href="https://medium.com/@steida" style={linkStyle}>
              Napsal
            </a>{' '}
            jsem nemálo článků,{' '}
            <a
              href="https://www.youtube.com/results?search_query=daniel+steigerwald"
              style={linkStyle}
            >
              přednášel
            </a>{' '}
            na řadě konferencích a srazech.
          </div>
          <div style={paragraphStyle}>
            Za programátora ale hovoří jeho kód. Jsem autorem populárního{' '}
            <a href="https://reactjs.org/" style={linkStyle}>
              React
            </a>{' '}
            starter kitu{' '}
            <a href="https://github.com/este/este" style={linkStyle}>
              Este.js
            </a>
            , který demonstruje mnohé techniky a praktiky vývoje webových
            aplikací.
          </div>
          <div style={paragraphStyle}>
            <img src="/static/hu.jpg" width={1024 / 3} height={575 / 3} />
          </div>
          <div style={paragraphStyle}>
            Postupem času jsem přišel na to, že lepší než předčítat slajdy nebo
            procházet příklady, je společně psát aplikaci. Teorii vysvětluji
            pouze na konkrétním kódu.
          </div>
          <div id="verejne-kurzy" style={heading2Style}>
            Veřejné kurzy
          </div>
          <div style={paragraphStyle}>
            Nabízím tři veřejné na sebe navazující jednodenní kurzy. Je možné
            objednat se na kterýkoliv zvlášť. Každý kurz začíná v deset
            dopoledne a končí v šest večer. Všechna školení se konají v Praze v
            prostorách{' '}
            <a href="https://www.jammclub.cz/" style={linkStyle}>
              Jamm Club.
            </a>{' '}
            Občerstvení je v ceně. Notebooky sebou.
          </div>
          <div style={paragraphStyle}>
            Jeden den školení stojí <b>4 900 Kč</b>. Studenti a plátci Bitcoinem
            mají 20 % slevu.
          </div>
          <div style={heading3Style}>Základy JavaScriptu a Reactu</div>
          <div style={paragraphStyle}>
            Budete překvapeni, co vše se lze naučit za jediný den. Napíšeme si
            jednoduchou SPA (single page application) a nasadíme ji do cloudu.
            Výsledný kód však půjde přidat i do existující PHP, .NET, Java
            aplikace.
          </div>
          <div style={paragraphStyle}>
            Začneme přehledem moderního JavaScriptu, následně si projdeme{' '}
            <a href="https://reactjs.org/" style={linkStyle}>
              React
            </a>
            . Poté si nainstalujeme{' '}
            <a href="https://nodejs.org/en/" style={linkStyle}>
              Node.js
            </a>{' '}
            a{' '}
            <a href="https://nextjs.org/" style={linkStyle}>
              Next.js
            </a>
            , nastavíme{' '}
            <a style={linkStyle} href="https://code.visualstudio.com/">
              VSCode
            </a>{' '}
            editor, a začneme tvořit webovou aplikaci. Představím vám odzkoušené
            knihovny komponent, ale také jak si správně tvořit komponenty
            vlastní.
          </div>
          <div style={paragraphStyle}>
            Školení je vhodné pro každého, kdo zná alespoň základy HTML, CSS, a
            JavaScriptu nebo podobného jazyka. Ideální i pro doposud pouze na
            server orientované programátory.
          </div>
          <div style={paragraphStyle}>
            <img src="/static/bar.jpg" width={500 / 2} height={333 / 2} />
          </div>
          <RegisterLinkButton date="11. února 2019" />
          <div style={heading3Style}>
            JavaScript a React pro mírně pokročilé
          </div>
          <div style={paragraphStyle}>
            Nejprve si porovnáme různé přístupy ke stylování. Klasické
            stylopisy, CSS moduly, styly v JavaScriptu (CSS in JS), design
            systémy, atomické CSS.
          </div>
          <div style={paragraphStyle}>
            Každá webová aplikace potřebuje pracovat s daty. Proto budeme
            pokračovat formulářem s validací, to často potrápí i zkušené
            programátory. Ukážeme si konzumaci klasického REST API, pak ale
            přejdeme na{' '}
            <a href="https://graphql.org/" style={linkStyle}>
              GraphQL
            </a>{' '}
            – fantastickou technologii dneška. Pro plné využití GraphQL je
            vhodné mít aplikace staticky typované. Proto se naučíme{' '}
            <a href="https://www.typescriptlang.org/" style={linkStyle}>
              TypeScript
            </a>
            .
          </div>
          <div style={paragraphStyle}>
            K večeru bude naše aplikace ukládat data do SQL databáze skrze
            revoluční službu{' '}
            <a style={linkStyle} href="https://www.prisma.io/">
              Prisma
            </a>
            .
          </div>
          <div style={paragraphStyle}>
            <img src="/static/foo.jpg" width={480 / 2} height={360 / 2} />
          </div>
          <div style={paragraphStyle}>
            Školení je plné praktických typů, dostanete pravidelně aktualizovaný
            seznam doporučené literatury a zdrojů (jen to nejnutnější), naučíme
            se jak odchytávat a ladit chyby.
          </div>
          <RegisterLinkButton date="12. února 2019" />
          <div style={heading3Style}>JavaScript a React pro pokročilé</div>
          <div style={paragraphStyle}>
            <img
              style={{ borderRadius: '50%', float: 'right' }}
              src="/static/me.jpg"
              width={150}
              height={150}
            />
            Třetí a poslední den školení je věnovaný všemu tomu, co potřebujeme,
            abychom mohli nasadit kvalitní aplikaci do produkce. Lokalizace,
            přístupnost, testování, reportování chyb, optimalizace rychlosti, a
            mnoho dalšího. Opět nečekejte suchou teorii, ale praxí ověřený kód.
          </div>
          <div style={paragraphStyle}>
            V závěru se soustředíme na širší okolí. Mobilní nativní (iOS a
            Android) aplikace psané pomocí{' '}
            <a
              href="https://facebook.github.io/react-native/"
              style={linkStyle}
            >
              React Native
            </a>{' '}
            a webové pomocí{' '}
            <a
              href="https://github.com/necolas/react-native-web"
              style={linkStyle}
            >
              React Native Web
            </a>
            . A jak sdílet kód na serveru, v prohlížeci, desktopu, či mobilu.
            Nikdo nechce psát validace nebo šablony více než jednou.
          </div>
          <RegisterLinkButton date="13. února 2019" />
          <div id="pro-firmy" style={heading2Style}>
            Pro firmy
          </div>
          <div style={paragraphStyle}>
            Na otázku čím se živím občas odpovídám: "angel developer". Školení
            pro firmy vždy upravuji na míru, tím to ale nekončí. Angel developer
            je k dispozici, kdykoliv je třeba. Dělá code review, hlídá návrh
            infrastuktury, stará se o blaho programátorů. Cílem je maximálně
            pomoci vašemu projektu.
          </div>
          <div style={paragraphStyle}>
            Jedna hodina konzultací a programování stojí <b>4 900 Kč</b>.
          </div>
          <div id="mam-zajem" style={heading2Style}>
            Mám zájem
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfeGhm4v-BmRK5EWh46P9H4fcZ7PA1v-ORsDaa77Yi-qm1P7g/viewform?embedded=true"
            width="640"
            height="706"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading...
          </iframe>
          <div id="kontact" style={heading2Style}>
            Kontakt
          </div>
          <div style={paragraphStyle}>
            Mentoring, konzultace, audit, školení na míru, cokoliv vás zajímá,
            napište nebo zavolejte mi.
          </div>
          <div style={paragraphStyle}>
            <a href="mailto:daniel@steigerwald.cz" style={linkStyle}>
              daniel@steigerwald.cz
            </a>
          </div>
          <div style={paragraphStyle}>
            <a href="tel:+420775326783" style={linkStyle}>
              +420 775326783
            </a>
          </div>
          <div style={paragraphStyle}>
            <a href="https://twitter.com/estejs" style={linkStyle}>
              twitter.com/estejs
            </a>
          </div>
          <div id="reference" style={heading2Style}>
            Reference
          </div>
          {recommendations.map(recommendation => {
            return (
              <div key={recommendation.text} style={paragraphStyle}>
                <i>„{recommendation.text}“</i>
                <br />
                <a style={linkStyle} href={recommendation.link}>
                  {recommendation.link}
                </a>
              </div>
            );
          })}
        </Body>
      </div>
      <style jsx global>{`
        body {
          background-color: ${theme.colors.background};
        }
        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Index;
