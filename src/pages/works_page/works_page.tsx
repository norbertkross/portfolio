import Header from "../../components/header"
import Footer from "../../components/footer"
import WorkSection from "./works_section"

export default function Works() {

  return (
    <>
    <Header/>
        <div className="my-12">
       <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold">My Works</h1>
          <p className="mx-auto w-11/12 md:max-w-2xl text-xl">
            Explore my diverse portfolio of projects that showcase my expertise and commitment to excellence. From innovative web applications to engaging mobile experiences, my works reflect my dedication to delivering high-quality solutions tailored to meet my clients' unique needs.
          </p>
        </header>
       </div>
       <div className="mx-auto my-14 w-[90%]">

        <WorkSection/>
       </div>
    <Footer/>
    </>
  )
}