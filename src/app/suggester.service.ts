import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, of, timeout} from "rxjs";

export interface Job {
  id: number
  name: string
  description: string
  specializations: string[]
  plan: string[]
}

@Injectable({
  providedIn: 'root'
})
export class SuggesterService {

  private aiService = 'https://hackyeah-chat-afee3217b443.herokuapp.com/inference';

  private data: Job[] = [];

  constructor(private http: HttpClient) {
  }

  suggest(q1: string, q2: string, q3: string, q4: string, q5: string, q6: string) {
    // const response = this.http.post<result>(this.aiService, {q1, q2, q3, q4, q5, q6}, {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //   })
    // }).pipe(
    //   timeout(60_000),
    //   catchError(e => of({
    //     result: "",
    //   } as result)),
    // );

    const response = new Observable<result>(subscriber => {
      subscriber.next({
        "result": "Zaw\u00f3d|Opis zawodu|Przyk\u0142adowy kierunek studi\u00f3w1|Przyk\u0142adowy kierunek studi\u00f3w2|Przyk\u0142adowy kierunek studi\u00f3w3\nAnalityk danych|Analityk danych zajmuje si\u0119 pozyskiwaniem, analiz\u0105 i prezentacj\u0105 danych. Pracuje samodzielnie lub w zespo\u0142ach badawczych. Jest odpowiedzialny za prowadzenie audytu, badanie potrzeb klient\u00f3w, projektowanie us\u0142ug spo\u0142ecznych i biznesowych oraz badanie opinii publicznej.|Informatyka|Analiza danych|Statystyka\nIn\u017cynier sztucznej inteligencji|In\u017cynier sztucznej inteligencji zajmuje si\u0119 tworzeniem i rozwijaniem system\u00f3w opartych na sztucznej inteligencji. Pracuje nad projektowaniem i implementacj\u0105 algorytm\u00f3w uczenia maszynowego oraz analiz\u0105 i przetwarzaniem danych. Mo\u017ce r\u00f3wnie\u017c zajmowa\u0107 si\u0119 eksploracj\u0105 kosmosu w kontek\u015bcie sztucznej inteligencji.|Informatyka|Sztuczna inteligencja|Robotyka\nAnalityk finansowy|Analityk finansowy zajmuje si\u0119 analiz\u0105 danych finansowych i opracowywaniem prognoz ekonomicznych. Pracuje g\u0142\u00f3wnie w domach maklerskich i firmach finansowych. Jest odpowiedzialny za analiz\u0119 rynku, ocen\u0119 ryzyka inwestycyjnego oraz opracowywanie strategii finansowych.|Ekonomia|Finanse i rachunkowo\u015b\u0107|Bankowo\u015b\u0107 i ubezpieczenia\nPlany dzia\u0142ania: \nZaw\u00f3d|Plan dzia\u0142ania\nAnalityk danych|1. Rozpocznij od zdobycia wiedzy z zakresu analizy danych, statystyki i programowania.\nAnalityk danych|2. Zapisz si\u0119 na kursy online lub uczestnicz w szkoleniach, kt\u00f3re pomog\u0105 Ci opanowa\u0107 umiej\u0119tno\u015bci pracy z narz\u0119dziami do analizy danych, takimi jak Excel, SQL, Python lub R.\nAnalityk danych|3. Praktykuj analiz\u0119 danych na r\u00f3\u017cnych zestawach danych, aby zdoby\u0107 do\u015bwiadczenie praktyczne.\nAnalityk danych|4. Buduj swoje portfolio, prezentuj\u0105c r\u00f3\u017cne projekty analizy danych, kt\u00f3re wykona\u0142e\u015b.\nAnalityk danych|5. Szukaj sta\u017cu lub pracy jako analityk danych, aby zdoby\u0107 praktyczne do\u015bwiadczenie zawodowe.\n\nIn\u017cynier sztucznej inteligencji|1. Zdob\u0105d\u017a solidne podstawy w dziedzinie matematyki, w tym algebry, analizy matematycznej i statystyki.\nIn\u017cynier sztucznej inteligencji|2. Zapisz si\u0119 na kursy zwi\u0105zane z uczeniem maszynowym, g\u0142\u0119bokim uczeniem i sztuczn\u0105 inteligencj\u0105.\nIn\u017cynier sztucznej inteligencji|3. Naucz si\u0119 programowania w j\u0119zykach takich jak Python lub R, kt\u00f3re s\u0105 powszechnie u\u017cywane w dziedzinie sztucznej inteligencji.\nIn\u017cynier sztucznej inteligencji|4. Praktykuj tworzenie i trenowanie modeli uczenia maszynowego na r\u00f3\u017cnych zbiorach danych.\nIn\u017cynier sztucznej inteligencji|5. Buduj swoje portfolio, prezentuj\u0105c projekty zwi\u0105zane z sztuczn\u0105 inteligencj\u0105, kt\u00f3re wykona\u0142e\u015b.\nIn\u017cynier sztucznej inteligencji|6. Szukaj sta\u017cu lub pracy jako in\u017cynier sztucznej inteligencji, aby zdoby\u0107 praktyczne do\u015bwiadczenie zawodowe.\n\nAnalityk finansowy|1. Zdob\u0105d\u017a wiedz\u0119 z zakresu finans\u00f3w, w tym rachunkowo\u015bci, analizy finansowej i zarz\u0105dzania portfelem.\nAnalityk finansowy|2. Zapisz si\u0119 na kursy zwi\u0105zane z analiz\u0105 finansow\u0105, takie jak ocena ryzyka, wycena aktyw\u00f3w i analiza wska\u017anikowa.\nAnalityk finansowy|3. Naucz si\u0119 obs\u0142ugi narz\u0119dzi do analizy finansowej, takich jak Excel, SQL i programy do modelowania finansowego.\nAnalityk finansowy|4. Praktykuj analiz\u0119 finansow\u0105 na r\u00f3\u017cnych przypadkach, aby zdoby\u0107 do\u015bwiadczenie praktyczne.\nAnalityk finansowy|5. Buduj swoje portfolio, prezentuj\u0105c r\u00f3\u017cne projekty zwi\u0105zane z analiz\u0105 finansow\u0105, kt\u00f3re wykona\u0142e\u015b.\nAnalityk finansowy|6. Szukaj sta\u017cu lub pracy jako analityk finansowy, aby zdoby\u0107 praktyczne do\u015bwiadczenie zawodowe.",
      });
    });

    return new Observable<Job[]>(subscriber => {
      const offers: { [index: string]: Job } = {};

      response.subscribe(result => {
        const split = result.result.split(/\n\s*Plany działania:\s*\n/i);

        if (split.length < 2) {
          return;
        }

        console.log(
          split[0].split("\n").slice(1),
          split[1].split("\n"),
        );

        split[0].split("\n")
          .slice(1)
          .forEach(v => {
            if (v === '') {
              return;
            }

            const data = v.split('|');

            offers[data[0].trim()] = {
              id: 0,
              name: data[0].trim(),
              description: data[1]?.trim() || '',
              specializations: (data?.slice(2) || []).map(v => v.trim()),
              plan: [],
            };
          });

        split[1].split("\n")
          .slice(1)
          .forEach(v => {
            if (v === '') {
              return;
            }

            const data = v.split('|');

            if (data.length < 2) {
              return;
            }

            offers[data[0].trim()].plan.push(data[1].trim());
          });

        this.data = Object.values(offers).map((v, idx) => {
          v.id = idx + 1;

          return v;
        });

        subscriber.next(this.data);
      });
    });
  }

  getAll() {
    return this.data;
  }

  getById(id: number) {
    return this.data[id - 1];
  }
}

interface result {
  result: string
}
