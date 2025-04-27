
import { motion } from "framer-motion";

const CanadianProducer = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <motion.div 
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                alt="Canadian Farm" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-block mb-2">
                <div className="canadian-badge">
                  <div className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"></div>
                  <span>Producer Spotlight</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Meet Your Local Producers</h2>
              <p className="text-muted-foreground mt-4">
                We partner with over 200 Canadian farmers and producers to bring you the freshest and 
                highest quality products. Every purchase supports local communities and sustainable practices.
              </p>
              <div className="mt-6 p-4 bg-background rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                      alt="Farmer John" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Meadowvale Family Farm</h4>
                    <p className="text-sm text-muted-foreground">Ontario, Canada</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  "We've been farming organically for three generations. Partnering with Maple Leaf Market
                  has allowed us to reach more Canadians who care about where their food comes from."
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
