export default function PageNotFound() {
  return (
    <>
      <div className="h-screen flex flex-col items-center pt-16">
        <h1 className="text-2xl font-medium mb-2">SIDAN HITTADES INTE</h1>
        <p className="mb-8">Sidan du letar efter är för närvarande inte tillgänglig.</p>

        <a className="font-bold underline" href="/products">Se våra produkter</a>
      </div>
    </>
  );
}
