import { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import CanadianProducer from "@/components/CanadianProducer";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Maple Leaf Market - Fresh, Local Canadian Products";
  }, []);

  return (
    <Layout data-oid="16s_sw3">
      <Hero data-oid="8m5l85p" />
      <CategoryGrid data-oid="_j8ng6s" />
      <FeaturedProducts data-oid="uwzogib" />
      <CanadianProducer data-oid="1qcu6ax" />
      <section className="py-12 container mx-auto px-4" data-oid="00hz.pb">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="vq_f_ds"
        >
          <div
            className="bg-forest/5 rounded-xl p-6 flex flex-col items-center text-center"
            data-oid="ix.upt0"
          >
            <div
              className="h-12 w-12 bg-forest/10 rounded-full flex items-center justify-center mb-4"
              data-oid="ynomo-p"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-forest"
                data-oid="ufk666x"
              >
                <path d="M12 10V2" data-oid="ynqtxg1"></path>
                <path
                  d="M18.4 14.2a6.5 6.5 0 0 0-8.8-8.8"
                  data-oid="r7lgl57"
                ></path>
                <path
                  d="M22 16.92v.52a5 5 0 0 1-5 5 4.9 4.9 0 0 1-4.5-2.97 5 5 0 0 1 10-1.48"
                  data-oid="s_7xyiw"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="ncd_y9v">
              Support Local Economy
            </h3>
            <p className="text-muted-foreground text-sm" data-oid="gh1s536">
              Your purchases directly support Canadian farmers, producers, and
              communities.
            </p>
          </div>
          <div
            className="bg-forest/5 rounded-xl p-6 flex flex-col items-center text-center"
            data-oid="k8kq3uw"
          >
            <div
              className="h-12 w-12 bg-forest/10 rounded-full flex items-center justify-center mb-4"
              data-oid="if5m_cy"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-forest"
                data-oid="1chp-1l"
              >
                <path
                  d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"
                  data-oid="ar5vo3a"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="ra3_zm9">
              Fresh & Seasonal
            </h3>
            <p className="text-muted-foreground text-sm" data-oid="9nefzys">
              We offer fresh, seasonal products with shorter supply chains for
              maximum freshness.
            </p>
          </div>
          <div
            className="bg-forest/5 rounded-xl p-6 flex flex-col items-center text-center"
            data-oid="libq618"
          >
            <div
              className="h-12 w-12 bg-forest/10 rounded-full flex items-center justify-center mb-4"
              data-oid="juclm7u"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-forest"
                data-oid="zgb0py8"
              >
                <path
                  d="M18 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                  data-oid="ngcrd2v"
                ></path>
                <path d="M3 12a9 3 0 0 0 9 3H14" data-oid="h2j5hip"></path>
                <path d="M4 9h1" data-oid="mhfi5w6"></path>
                <path d="M4 15h1" data-oid="vnd:9ct"></path>
                <path d="M9 3v3" data-oid="g:c-g5v"></path>
                <path d="M13 3v3" data-oid="7nkjkd1"></path>
                <path d="M12 21v-3" data-oid="1xiudb8"></path>
                <path d="M8 21v-3" data-oid="kxocl8g"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="fmd-vyn">
              Sustainable Choices
            </h3>
            <p className="text-muted-foreground text-sm" data-oid="xrka0:6">
              Choose eco-friendly options that help reduce carbon footprint and
              support sustainable practices.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
