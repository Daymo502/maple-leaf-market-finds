import { motion } from "framer-motion";

const CanadianProducer = () => {
  return (
    <section className="py-12 bg-muted" data-oid="k.hnp5l">
      <div className="container mx-auto px-4" data-oid="nem1e9g">
        <div
          className="flex flex-col md:flex-row gap-8 items-center"
          data-oid="9q8oywr"
        >
          <div className="md:w-1/2" data-oid="wfvjvf3">
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-oid="s9obqpe"
            >
              <img
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
                alt="Canadian Farm"
                className="w-full h-auto object-cover"
                data-oid="gpr3ogj"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 space-y-4" data-oid="ts1idc-">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="rhum503"
            >
              <div className="inline-block mb-2" data-oid="bgssejd">
                <div className="canadian-badge" data-oid="7lm:l68">
                  <div
                    className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                    data-oid="ydfh89:"
                  ></div>
                  <span data-oid="pziam0_">Producer Spotlight</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold" data-oid="8dbuq3z">
                Meet Your Local Producers
              </h2>
              <p className="text-muted-foreground mt-4" data-oid="q1ia0lc">
                We partner with over 200 Canadian farmers and producers to bring
                you the freshest and highest quality products. Every purchase
                supports local communities and sustainable practices.
              </p>
              <div
                className="mt-6 p-4 bg-background rounded-lg border border-border"
                data-oid="588-7et"
              >
                <div
                  className="flex items-center gap-3 mb-3"
                  data-oid="0z_.f5a"
                >
                  <div
                    className="h-12 w-12 rounded-full overflow-hidden"
                    data-oid="88nkrjx"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
                      alt="Farmer John"
                      className="w-full h-full object-cover"
                      data-oid="r9ym7sg"
                    />
                  </div>
                  <div data-oid="ngvhmkg">
                    <h4 className="font-semibold" data-oid="i33vb.h">
                      Meadowvale Family Farm
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid=":r2zvc2"
                    >
                      Ontario, Canada
                    </p>
                  </div>
                </div>
                <p className="text-sm italic" data-oid="hhcoyp2">
                  "We've been farming organically for three generations.
                  Partnering with Maple Leaf Market has allowed us to reach more
                  Canadians who care about where their food comes from."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanadianProducer;
