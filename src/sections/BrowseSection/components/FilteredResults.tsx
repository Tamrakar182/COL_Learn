import { Clock } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { motion } from "framer-motion";
import { cardVariants } from "@/config-global";
import { useNavigate } from "react-router-dom";

interface Props {
    filteredResults: {
        id: string;
        name: string;
        type: string;
        difficulty: string;
        duration: string;
        categories: string[];
    }[]
}

const FilteredResults = ({ filteredResults }: Props) => {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredResults.map((result, index) => (
                <motion.div
                    key={result.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >

                    <div
                        onClick={() => navigate(`/browse/${result.type}/${result.id}`)}
                        className="col-span-1 flex flex-col gap-8 p-4 cursor-pointer bg-white hover:shadow-md rounded border overflow-hidden transform transition-transform duration-300 hover:scale-105"
                    >
                        <div>
                            <p className="text-sm tracking-widest uppercase">{result.type}</p>
                            <p className="font-semibold text-lg">{result.name}</p>
                        </div>

                        <div>
                            <div className="flex flex-row items-center gap-2">
                                <Clock size={16} />
                                <p className="text-lg">{result.duration}</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {result.categories.map((category: string) => (
                                    <Badge key={category} className='bg-[#3b82f6] text-sm cursor-pointer items-center justify-center'>
                                        {category}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
            ))}
            {filteredResults.length === 0 && (
                <div className="col-span-1 sm:col-span-2 flex flex-col items-center justify-center min-h-[50vh] p-4 bg-white overflow-hidden">
                    <p>No results found, Try another filter</p>
                </div>
            )}
        </div>
    )
}

export default FilteredResults