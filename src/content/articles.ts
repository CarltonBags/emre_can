import type { Article } from "@/lib/types";

import adeyemiBarcelona from "./articles/adeyemi-geht-nach-barcelona";
import dasDerbyIstZurueck from "./articles/das-derby-ist-zurueck";
import dankeNuri from "./articles/danke-nuri";
import fuenfzigJahre from "./articles/fuenfzig-jahre-westfalenstadion";
import larsRicken from "./articles/lars-ricken-vom-lupfer-zum-chef";
import matsHummels from "./articles/mats-hummels-hoert-auf";
import sebastianKehl from "./articles/sebastian-kehl-echter-borusse";
import watzkePraesident from "./articles/watzke-praesident";
import andreasMoeller from "./articles/andreas-moeller-held-meiner-kindheit";
import derTagAnDemMainzKam from "./articles/der-tag-an-dem-mainz-kam";
import dieAufholjagd from "./articles/die-aufholjagd-platz-vier";
import dieGelbeWand from "./articles/die-gelbe-wand-am-samstag";
import dieNachtVonBergamo from "./articles/die-nacht-von-bergamo";
import einSommerDerAbschiede from "./articles/ein-sommer-der-abschiede";
import emreCan from "./articles/emre-can-mein-kapitaen";
import guirassy from "./articles/guirassy-der-neuner-der-gefehlt-hat";
import ichGehMitDir from "./articles/ich-geh-mit-dir-borussia";
import jobeBellingham from "./articles/jobe-bellingham-eigener-name";
import judeGeht from "./articles/jude-geht-die-binde-bleibt";
import klubWm from "./articles/klub-wm-2025-amerika";
import marcoReus from "./articles/marco-reus-scheiss-auf-die-titel";
import michaelZorc from "./articles/michael-zorc-mehr-als-nur-ein-manager";
import oleBook from "./articles/ole-book-zurueck-zu-dem-was-der-bvb-kann";
import schlotterbeck from "./articles/schlotterbeck-verlaengert";
import supercup from "./articles/supercup-und-ein-comeback";
import vierBorussen from "./articles/vier-borussen-bei-der-wm";
import vizemeister from "./articles/vizemeister-2026";
import kovacFussball from "./articles/warum-der-kovac-fussball-der-richtige-ist";
import wembley from "./articles/wembley-wir-waren-da";

const all: Article[] = [
  adeyemiBarcelona,
  dasDerbyIstZurueck,
  dankeNuri,
  fuenfzigJahre,
  larsRicken,
  matsHummels,
  sebastianKehl,
  watzkePraesident,
  andreasMoeller,
  derTagAnDemMainzKam,
  dieAufholjagd,
  dieGelbeWand,
  dieNachtVonBergamo,
  einSommerDerAbschiede,
  emreCan,
  guirassy,
  ichGehMitDir,
  jobeBellingham,
  judeGeht,
  klubWm,
  marcoReus,
  michaelZorc,
  oleBook,
  schlotterbeck,
  supercup,
  vierBorussen,
  vizemeister,
  kovacFussball,
  wembley,
];

/** Neueste zuerst. */
export const articles: Article[] = [...all].sort((a, b) => b.date.localeCompare(a.date));

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getNeighbours(slug: string) {
  const index = articles.findIndex((article) => article.slug === slug);
  return {
    newer: index > 0 ? articles[index - 1] : undefined,
    older: index >= 0 && index < articles.length - 1 ? articles[index + 1] : undefined,
  };
}

export const categories = Array.from(new Set(articles.map((a) => a.category)));

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatDateShort(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function seasonOf(iso: string): string {
  const date = new Date(`${iso}T12:00:00Z`);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const start = month >= 7 ? year : year - 1;
  return `${start}/${String(start + 1).slice(2)}`;
}
