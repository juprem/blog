import { Separator } from '@/components/Layout/Separator.tsx';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import ReactSVG from "../../assets/react.svg"

export function Header() {
    return (
        <div className="h-[75px] content-center w-full mb-8">
            <div className="p-2 flex gap-2 items-center mb-4 text-gray-500">
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    <img src={ReactSVG} alt="React SVG" />
                </motion.div>
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
            </div>
            <Separator />
        </div>
    );
}
