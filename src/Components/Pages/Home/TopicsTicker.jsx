/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const TopicsTicker = () => {
    return (
        <div className="mt-10 overflow-hidden">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="flex min-w-max gap-6 text-xs uppercase tracking-wide "
            >
                {[
                    "Politics", "Business", "Sports", "Entertainment", "World", "Lifestyle", "Science", "Health", "Travel", "StartUps", "Security", "AI", "Apps", "Tech",

                ].map((item, i) => (
                    <span
                        key={item + i}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                        {item}
                    </span>
                ))}

            </motion.div>
        </div>
    );
};

export default TopicsTicker;
