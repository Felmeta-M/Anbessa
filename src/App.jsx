import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Nav } from "./components";
import { Details } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <main className="relative">
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b">
              <Hero />
            </section>
            <section className="padding">
              <PopularProducts />
            </section>
            <section className="padding">
              <SuperQuality />
            </section>
            <section className="padding-x py-10">
              <Services />
            </section>
            <section className="padding">
              <SpecialOffer />
            </section>
            <section className="bg-pale-blue padding">
              <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
              <Subscribe />
            </section>
            <section className="bg-black padding-x padding-t pb-8">
              <Footer />
            </section>
          </main>
        }
      />
      <Route path="/details/:id" element={<section className="padding-x"><Details /></section>} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;