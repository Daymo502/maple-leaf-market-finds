import { motion } from "framer-motion";

const CanadianProducer = () => {
  return (
    <section className="py-12 bg-muted" data-oid="91prqvl">
      <div className="container mx-auto px-4" data-oid="c-bzxp2">
        <div
          className="flex flex-col md:flex-row gap-8 items-center"
          data-oid=":59j1ot"
        >
          <div className="md:w-1/2" data-oid="5k_1:l6">
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-oid="fsa8:o_"
            >
              <img
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
                alt="Canadian Farm"
                className="w-full h-auto object-cover"
                data-oid="8gz0b_u"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 space-y-4" data-oid="46khluo">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="hhpa_f-"
            >
              <div className="inline-block mb-2" data-oid="_4ynkrf">
                <div className="canadian-badge" data-oid="7p52f3d">
                  <div
                    className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                    data-oid="g-kff2u"
                  ></div>
                  <span data-oid="-vhhy-r">Producer Spotlight</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold" data-oid="aq_e-v5">
                Meet Your Local Producers
              </h2>
              <p className="text-muted-foreground mt-4" data-oid="g26m.:n">
                We partner with over 200 Canadian farmers and producers to bring
                you the freshest and highest quality products. Every purchase
                supports local communities and sustainable practices.
              </p>
              <div
                className="mt-6 p-4 bg-background rounded-lg border border-border"
                data-oid="0jp8k84"
              >
                <div
                  className="flex items-center gap-3 mb-3"
                  data-oid="td_y39v"
                >
                  <div
                    className="h-12 w-12 rounded-full overflow-hidden"
                    data-oid="jf5fctm"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
                      alt="Farmer John"
                      className="w-full h-full object-cover"
                      data-oid="lppzaro"
                    />
                  </div>
                  <div data-oid="gjaa9t3">
                    <h4 className="font-semibold" data-oid="15lg0xk">
                      Meadowvale Family Farm
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="6kwxw-0"
                    >
                      Ontario, Canada
                    </p>
                  </div>
                </div>
                <p className="text-sm italic" data-oid="3j:i2cv">
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
