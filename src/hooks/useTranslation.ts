"use client";

import { useParams } from "next/navigation";
import { getTranslations, Translations } from "@/lib/translations";
import { Lang } from "@/lib/types";

export function useTranslation(): { t: Translations; lang: Lang } {
  const params = useParams();
  const lang = (params?.lang as Lang) || "cz";
  return { t: getTranslations(lang), lang };
}
