import { motion } from "framer-motion";

const CanadianProducer = () => {
  return (
    <section className="py-12 bg-muted" data-oid="dyge:na">
      <div className="container mx-auto px-4" data-oid="k2iii-6">
        <div
          className="flex flex-col md:flex-row gap-8 items-center"
          data-oid="gy0tam3"
        >
          <div className="md:w-1/2" data-oid="v4ljjo:">
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-oid=":o4myn9"
            >
              <img
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
                alt="Canadian Farm"
                className="w-full h-auto object-cover"
                data-oid="edb.p-n"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 space-y-4" data-oid="ej-peui">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="y7f:t18"
            >
              <div className="inline-block mb-2" data-oid="ma578p.">
                <div className="canadian-badge" data-oid="zb3r5ot">
                  <div
                    className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                    data-oid="s.7-vx7"
                  ></div>
                  <span data-oid="lngt275">Producer Spotlight</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold" data-oid="cbzc57j">
                Meet Your Local Producers
              </h2>
              <p className="text-muted-foreground mt-4" data-oid="zv1-0.f">
                We partner with over 200 Canadian farmers and producers to bring
                you the freshest and highest quality products. Every purchase
                supports local communities and sustainable practices.
              </p>
              <div
                className="mt-6 p-4 bg-background rounded-lg border border-border"
                data-oid=":wq1xl8"
              >
                <div
                  className="flex items-center gap-3 mb-3"
                  data-oid="o4ijz7-"
                >
                  <div
                    className="h-12 w-12 rounded-full overflow-hidden"
                    data-oid="bxem.3x"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
                      alt="Farmer John"
                      className="w-full h-full object-cover"
                      data-oid="z613pzg"
                    />
                  </div>
                  <div data-oid="bz5:fnt">
                    <h4 className="font-semibold" data-oid=".6xtqiy">
                      Meadowvale Family Farm
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="wzkbtv9"
                    >
                      Ontario, Canada
                    </p>
                  </div>
                </div>
                <p className="text-sm italic" data-oid=":n021h2">
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
