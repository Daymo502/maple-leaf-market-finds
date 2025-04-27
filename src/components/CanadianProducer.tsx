import { motion } from "framer-motion";

const CanadianProducer = () => {
  return (
    <section className="py-12 bg-muted" data-oid="t1b0y_7">
      <div className="container mx-auto px-4" data-oid="1:7mxpw">
        <div
          className="flex flex-col md:flex-row gap-8 items-center"
          data-oid="-ba_ung"
        >
          <div className="md:w-1/2" data-oid="jqch84y">
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-oid="ztn94xe"
            >
              <img
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
                alt="Canadian Farm"
                className="w-full h-auto object-cover"
                data-oid="2zyadcb"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 space-y-4" data-oid="cacu-kp">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="5o1-jxc"
            >
              <div className="inline-block mb-2" data-oid="i9vitpe">
                <div className="canadian-badge" data-oid="vvjjx5g">
                  <div
                    className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                    data-oid="aiq73hg"
                  ></div>
                  <span data-oid="izb0lt0">Producer Spotlight</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold" data-oid="t8mesil">
                Meet Your Local Producers
              </h2>
              <p className="text-muted-foreground mt-4" data-oid="n7cnet_">
                We partner with over 200 Canadian farmers and producers to bring
                you the freshest and highest quality products. Every purchase
                supports local communities and sustainable practices.
              </p>
              <div
                className="mt-6 p-4 bg-background rounded-lg border border-border"
                data-oid="1oq80bq"
              >
                <div
                  className="flex items-center gap-3 mb-3"
                  data-oid="na1m6.z"
                >
                  <div
                    className="h-12 w-12 rounded-full overflow-hidden"
                    data-oid="w8b2.lh"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
                      alt="Farmer John"
                      className="w-full h-full object-cover"
                      data-oid="rtnj1tt"
                    />
                  </div>
                  <div data-oid="-98q:io">
                    <h4 className="font-semibold" data-oid="d9-27a8">
                      Meadowvale Family Farm
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="v.a.vzx"
                    >
                      Ontario, Canada
                    </p>
                  </div>
                </div>
                <p className="text-sm italic" data-oid="w98jimz">
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
