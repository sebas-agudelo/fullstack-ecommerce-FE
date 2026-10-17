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

Projektet är en fullstackbaserad e-handelslösning där användare kan utforska och söka bland produkter, hantera sin kundvagn och genomföra köp. Lösningen stödjer både inloggade användare och gäster, med ett checkout-flöde integrerat med Stripe för betalningshantering.

Frontend är utvecklad i React och kommunicerar med ett REST API byggt med Node/Express.js. Supabase och PostgreSQL används för datalagring och autentisering, medan Stripe hanterar betalningsflödet. React Query används för datahämtning och cachelagring, vilket minskar onödiga API-anrop och gör att tidigare hämtad data kan återanvändas vid navigering mellan sidor.
