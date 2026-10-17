Fullstack E-handel

En fullstack-webbutik byggd med React, JavaScript, Node/Express.js

## Funktioner

- Produktvisning, sökning och paginering
- State hantering med react/TanStack query
- Kundvagn för gäster och inloggade användare
- Autentisering med Supabase
- Kassa och betalningar med Stripe


## Teknikstack

- **Språk och verktyg:** JavaScript och Zod
- **Frontend:** React, React query, Tailwind CSS och Swiper
- **Backend:** Node/Express.js
- **Databas och autentisering:** Supabase, PostgreSQL
- **Betalningar:** Stripe och stripe webhook
- **Driftsättning:** Vercel (frontend), Render (backend)

## Om projektet

Projektet är en fullstack e-handel där användare kan utforska och söka bland produkter, hantera sin kundvagn och genomföra köp. Lösningen stödjer både inloggade användare och gäster, med ett checkout flöde integrerat med Stripe för betalningshantering.

Frontend är utvecklad i React och kommunicerar med ett REST API byggt med Node/Express.js. Supabase och PostgreSQL används för datalagring och autentisering, medan Stripe hanterar betalningsflödet. 

React Query används för datahämtning och cachelagring, vilket minskar onödiga API-anrop och gör att tidigare hämtad data kan återanvändas vid navigering mellan sidor.

## Utmaningar
En av utmaningarna var t.ex när data hanteras vid paginering. När användaren navigerade från sida t.ex 1 till sida 2 och sedan tillbaka till sida 1 behövde produktdatan hämtas på nytt, trots att den redan hade hämtats tidigare.

För att lösa detta implementerade jag TanStack Query (React Query), som cachar produktdata för respektive sida och gör det möjligt att återanvända tidigare hämtade resultat vid navigering. Det minskar onödiga API-anrop och gör att loading spinner endast behöver visas vid den första datahämtningen. När användaren återvänder till en sida kan den cachade datan visas direkt, vilket ger en snabbare och smidigare användarupplevelse.

## Bilder
<img width="2524" height="1186" alt="Skärmbild 2026-10-17 164955" src="https://github.com/user-attachments/assets/fbc353e2-138d-4b52-a299-0ee088630992" />
<img width="2166" height="1260" alt="Skärmbild 2026-10-17 165819" src="https://github.com/user-attachments/assets/31836114-9952-4644-b54e-f634e380934a" />
<img width="2532" height="1266" alt="Skärmbild 2026-10-17 170248" src="https://github.com/user-attachments/assets/3d43b72b-32a2-44a0-b448-87f4e7e6562a" />
<img width="2560" height="1256" alt="Skärmbild 2026-10-17 170306" src="https://github.com/user-attachments/assets/6112cebc-ca57-4d5d-b279-1729c7523ab0" />
<img width="2558" height="1194" alt="Skärmbild 2026-10-17 170319" src="https://github.com/user-attachments/assets/47a6e47a-bcab-4263-8afd-1e7300bea592" />





