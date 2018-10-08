// @flow
import * as React from 'react';
import Head from 'next/head';
import Text from '../components/Text';
import Container from '../components/Container';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import Link from '../components/Link';
import Image from '../components/Image';
import LinkButton from '../components/LinkButton';

const recommendations = [
  {
    text: `That said, musim uznat ze skoleni od @steida mi otevrelo oci. Najednou React, Flux, functional programming atd. davaji smysl. Doporucuju`,
    link: 'https://twitter.com/pajasevi/status/663129231837282304',
  },
  {
    text: `Pokud chcete s izomorfními aplikacemi začít, pak doporučují projít Danovu prezentaci z letošního WebExpa, kde najdete mnoho odkazů na to nejlepší, co je momentálně k dispozici. Pro mě osobně byla Danova přednáška nejlepší z těch, které jsem letos navštívil.`,
    link: 'https://www.zdrojak.cz/clanky/jake-webexpo-2014',
  },
  {
    text: `Nejvíc nás zaujaly přednášky týkající se JavaScriptu. Zejména výborná „Za hranicemi jQuery“ od Daniela Steigerwalda, která jenom potvrdila správnost našeho rozhodnutí pozvat si Dana na školení JavaScriptu do naší firmy.`,
    link: 'http://gmchk.cz/clanky/nase-postrehy-z-webexpo-2011/',
  },
  {
    text: `Danovi Steigerwaldovi se na přednášce podařilo ukázat, že se v JavaScriptovém vývoji opravdu dobře orientuje a část svých znalostí dokázal předat i publiku.`,
    link: 'https://php.vrana.cz/webexpo-2011.php',
  },
  {
    text: `Dan Steigerwald je bez debat naprostá česká špička mezi programátory v JavaScriptu. Rozhledem i schopnostmi výrazně přesahuje "jen výborné" JavaScriptaře. Navíc dokáže o problematice mluvit, přednášet a psát nejen zasvěceně, ale i srozumitelně a s nadhledem, který českým IT odborníkům obvykle velmi bolestně chybí.`,
    link: 'https://cz.linkedin.com/in/steigerwalddaniel',
  },
  {
    text: `Javascript skoleni u @steida je skvely a nekompromisni, vsichni tu vydrzi az do rana :)`,
    link: 'https://twitter.com/tonovotny/status/187585293166182402',
  },
  {
    text: `JS školení od @steida bylo nad očekávání. Získal jsem cenný přehled technologií, postupů, názvosloví.`,
    link: 'https://twitter.com/PetrBurian/status/187800507832741890',
  },
  {
    text: `Už je to nějaký pátek, co jsem byl na školení JS od @steida a stále jsem z toho nadšen! :) `,
    link: 'https://twitter.com/jindrichsamec/status/152783195715272705',
  },
  {
    text: `Fotbalový kouzelník Messi nebo webexpo přednáška od javascriptového mága @steida? Sledoval jsem to souběžně a oba podali výborný výkon! `,
    link: 'https://twitter.com/rdresler/status/187268778453766145',
  },
  {
    text: `Yes, yes, yes. Great presentation about the upcoming #JavaScript features / tools.`,
    link: 'https://twitter.com/dcorbacho/status/471964797991649281',
  },
];

const WantItLinkButton = () => (
  <LinkButton href="#register">Mám zájem</LinkButton>
);

const Index = () => {
  return (
    <Container>
      <Head>
        <title>Školení JavaScript, React, Este.js – Daniel Steigerwald</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <H1>Naučím vás JavaScript, React, Este.js</H1>
      <Paragraph>
        Jmenuji se Daniel Steigerwald a všechna školení vedu osobně. Přes deset
        let pomáhám firmám i jednotlivcům tvořit lepší software.{' '}
        <Link href="https://medium.com/@steida">Napsal</Link> jsem nemálo
        článků,{' '}
        <Link href="https://www.youtube.com/results?search_query=daniel+steigerwald">
          přednášel
        </Link>{' '}
        na řadě konferencí a meetupech.
      </Paragraph>
      <Paragraph>
        Za programátora ale hovoří jeho kód. Jsem autorem populárního{' '}
        <Link href="https://reactjs.org/">React</Link> starter kitu{' '}
        <Link href="https://github.com/este/este">Este.js</Link>, který
        demonstruje nejlepší techniky a praktiky vývoje webových a nativních
        aplikací.
      </Paragraph>
      <Paragraph>
        <Image src="/static/hu.jpg" width={1024 / 3} height={575 / 3} />
      </Paragraph>
      <Paragraph>
        Postupem času jsem přišel na to, že lepší než předčítat slajdy nebo
        procházet příklady, je společně psát aplikaci. Teorii vysvětluji pouze
        na konkrétním kódu.
      </Paragraph>
      <H2 id="public">Veřejné kurzy</H2>
      <Paragraph>
        Nabízím tři veřejné jednodenní kurzy, které na sebe navazují. Je možné
        objednat se na kterýkoliv zvlášť. Každý kurz začíná v deset dopoledne a
        končí v pět. Všechna školení se konají v Praze. Občerstvení je v ceně.
        Notebooky sebou.
      </Paragraph>
      <Paragraph>
        Jeden den školení stojí <b>4 900 Kč</b>. Studenti a plátci Bitcoinem
        mají mají 20% slevu.
      </Paragraph>
      <H3>Základy JavaScriptu a Reactu</H3>
      <Paragraph>
        Budete překvapeni, co vše se lze naučit za jediný den. Napíšeme si
        jednoduchou SPA (single page application) a nasadíme ji do cloudu.
        Výsledný kód však půjde přidat i do existující PHP, .NET, Java aplikace.
      </Paragraph>
      <Paragraph>
        Začneme přehledem moderního JavaScriptu, následně si projdeme{' '}
        <Link href="https://reactjs.org/">React</Link>. Poté si nainstalujeme{' '}
        <Link href="https://nodejs.org/en/">Node.js</Link> a{' '}
        <Link href="https://nextjs.org">Next.js</Link>, nastavíme vývojové
        prostředí, a začneme psát aplikaci. Představím vám odzkoušené knihovny
        komponent, ale také jak si správně tvořit vizuální komponenty vlastní. A
        k čemu slouží populární design systems. A to nejen pomocí klasického
        CSS, ale především CSS-in-JS.
      </Paragraph>
      <Paragraph>
        Školení je vhodné pro každého, kdo zná alespoň základy HTML, CSS, a
        JavaScriptu nebo podobného jazyka. Ideální i pro doposud pouze na server
        orientované programátory.
      </Paragraph>
      <Paragraph>
        <Image src="/static/bar.jpg" width={500 / 2} height={333 / 2} />
      </Paragraph>
      <Paragraph>
        <WantItLinkButton />
      </Paragraph>
      <H3>JavaScript a React pro mírně pokročilé</H3>
      <Paragraph>
        Každá webová aplikace potřebuje pracovat s daty. Proto začneme formuláři
        a validací, což jsou témata, která často potrápí i zkušené programátory.
        Ukážeme si použití klasického REST API, pak ale přejdeme na{' '}
        <Link href="http://graphql.org">GraphQL</Link> – fantastickou
        technologii dneška. Pro plné využití GraphQL je dobré mít aplikace
        staticky typované. Proto si něco povíme o{' '}
        <Link href="https://www.typescriptlang.org/">TypeScript</Link> a{' '}
        <Link href="http://flow.org">Flow</Link>. Na závěr dne bude naše
        aplikace ukládat typová data do SQL databáze skrze skvělou a revoluční
        službu <Link href="https://www.prisma.io/">Prisma.</Link>
      </Paragraph>
      <Paragraph>
        <Image src="/static/foo.jpg" width={480 / 2} height={360 / 2} />
      </Paragraph>
      <Paragraph>
        Školení je plné praktických typů, dostanete pravidelně aktualizovaný
        seznam doporučené literatury a zdrojů (jen to nejnutnější), naučíme se
        jak odchytávat a ladit chyby.
      </Paragraph>
      <Paragraph>
        <WantItLinkButton />
      </Paragraph>
      <H3>JavaScript a React pro pokročilé</H3>
      <Paragraph>
        <Image
          float="right"
          circle
          src="/static/me.jpg"
          width={150}
          height={150}
        />
        Třetí a poslední den školení je věnovaný všemu tomu, co potřebujeme,
        abychom mohli nasadit kvalitní aplikaci do produkce. Lokalizace,
        přístupnost, testování, algebraické datové typy, reportování chyb,
        optimalizace rychlosti, a mnoho dalšího. Opět nečekejte suchou teorii,
        ale praxí ověřený kód.
      </Paragraph>
      <Paragraph>
        V úplném závěru se soustředíme na širší okolí. Mobilní nativní (iOS a
        Android) aplikace psané pomocí{' '}
        <Link href="https://facebook.github.io/react-native/">
          React Native
        </Link>{' '}
        a mobilní webové aplikace psané pomocí{' '}
        <Link href="">React Native Web</Link>. Jak mít multiplatformní kód, tedy
        kód sdílený na straně serveru, clienta, desktopu, mobilu. Co obnáší
        návrh offline first a realtime aplikací.
      </Paragraph>
      <Paragraph>
        <WantItLinkButton />
      </Paragraph>
      <H2 id="inhouse">Pro firmy</H2>
      {/* <Paragraph>
        <Image src="/static/bar.jpg" width={500 / 2} height={333 / 2} />
      </Paragraph> */}
      <Paragraph>
        Na otázku čím se živím, občas odpovídám "angel developer". Školení pro
        firmy vždy upravuji na míru, tím to ale nekončí. Angel developer je k
        dispozici, kdykoliv je třeba. Dělá code review, hlídá návrh
        infrastuktury, stará se o blaho programátorů. Cílem je maximálně pomoci
        vašemu projektu.
      </Paragraph>
      <Paragraph>
        Jedna hodina konzultací a programování stojí <b>4 900 Kč</b>.
      </Paragraph>
      <H2 id="register">Registrace</H2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfeGhm4v-BmRK5EWh46P9H4fcZ7PA1v-ORsDaa77Yi-qm1P7g/viewform?embedded=true"
        width="640"
        height="706"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>
      <H2 id="contact">Kontakt</H2>
      <Paragraph>
        Mentoring, konzultace, audit, školení na míru, cokoliv vás zajímá,
        napište nebo zavolejte mi.
      </Paragraph>
      <Paragraph>
        <Link href="mailto:daniel@steigerwald.cz">daniel@steigerwald.cz</Link>
      </Paragraph>
      <Paragraph>
        <Link href="tel:+420775326783">+420 775326783</Link>
      </Paragraph>
      <H2 id="references">Reference</H2>
      {recommendations.map(recommendation => {
        return (
          <Paragraph key={recommendation.text}>
            <i>„{recommendation.text}“</i>
            <br />
            <Link href={recommendation.link}>{recommendation.link}</Link>
          </Paragraph>
        );
      })}
    </Container>
  );
};

export default Index;
