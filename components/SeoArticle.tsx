import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Enhanced JSON-LD with FAQ and detailed article schema
    const jsonLdData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "url": "https://filesizeconverter.doodax.com/",
          "name": "File Size Converter",
          "description": "Precision tool for converting digital storage units between Binary (IEC) and Decimal (SI) standards.",
          "publisher": {
            "@type": "Organization",
            "name": "HSINI MOHAMED",
            "logo": { "@type": "ImageObject", "url": "https://filesizeconverter.doodax.com/favicon.svg" }
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "File Size Converter Tool",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "featureList": "Binary to Decimal Conversion, Byte Precision, TB to GB Calculator, Real-time Calculation"
        },
        {
          "@type": "Article",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://filesizeconverter.doodax.com/" },
          "headline": "The Ultimate Guide to Digital Storage: Binary vs Decimal Standards",
          "description": "A comprehensive 3500-word guide explaining why your hard drive is smaller than advertised, the difference between KB and KiB, and how to manage digital storage effectively.",
          "author": { "@type": "Person", "name": "HSINI MOHAMED" },
          "publisher": {
            "@type": "Organization",
            "name": "HSINI MOHAMED",
            "logo": { "@type": "ImageObject", "url": "https://filesizeconverter.doodax.com/favicon.svg" }
          },
          "datePublished": "2023-10-27",
          "dateModified": "2023-10-28"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why is my 1TB hard drive only 931GB?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Manufacturers market drives using Decimal (1000-based) units, so 1TB = 1,000,000,000,000 bytes. Windows uses Binary (1024-based) units, so 1,000,000,000,000 / 1024^3 ≈ 931 GiB. The missing space is purely a difference in measurement language."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between KB and KiB?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "KB (Kilobyte) usually refers to 1000 bytes (Decimal/SI). KiB (Kibibyte) strictly refers to 1024 bytes (Binary/IEC). While often used interchangeably, the difference grows significantly at larger scales like Terabytes."
              }
            },
            {
              "@type": "Question",
              "name": "How many MB are in a GB?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the Decimal standard (used by storage manufacturers), 1 GB = 1000 MB. In the Binary standard (used by Windows/RAM), 1 GiB = 1024 MiB."
              }
            }
          ]
        }
      ]
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-12 px-4 md:px-0">
            <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
            
            <article className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                    Everything You Need to Know About File Size & Storage
                </h2>

                <div className="relative">
                    {/* Content Container with Conditional Line Clamp */}
                    <div className={`prose prose-invert max-w-none text-slate-300 leading-relaxed transition-all duration-500 ${!isExpanded ? 'line-clamp-2 overflow-hidden max-h-[4.5rem]' : ''}`}>
                        
                        <p className="font-medium text-lg text-white mb-6">
                            In the digital era, storage is currency. Whether you are a software engineer optimizing a database, a photographer backing up RAW images, or a gamer installing the latest AAA title, understanding how digital space is measured is critical. Yet, a massive confusion persists: Why does the 1TB drive you bought only show 931GB? The answer lies in the war between two mathematical standards: Binary and Decimal.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Table of Contents</h3>
                        <ul className="list-none pl-0 space-y-2 text-sm text-purple-300 mb-8">
                            <li><a href="#part1" className="hover:underline">1. The Bit and The Byte: Foundations of Computing</a></li>
                            <li><a href="#part2" className="hover:underline">2. The Great Schism: SI (1000) vs IEC (1024)</a></li>
                            <li><a href="#part3" className="hover:underline">3. Why Windows and Mac OS Disagree</a></li>
                            <li><a href="#part4" className="hover:underline">4. Detailed Unit Breakdown (KB to YB)</a></li>
                            <li><a href="#part5" className="hover:underline">5. Internet Speed vs Storage (Mbps vs MBps)</a></li>
                            <li><a href="#faq" className="hover:underline">6. Frequently Asked Questions</a></li>
                        </ul>

                        <hr className="border-slate-700 my-8" />

                        <h3 id="part1" className="text-xl font-bold text-white mt-8 mb-4">1. The Bit and The Byte: Foundations of Computing</h3>
                        <p>
                            To understand file sizes, we must zoom into the microscopic level of computing. The fundamental particle of digital data is the <strong>Bit</strong> (binary digit). A bit is a single switch: it is either On (1) or Off (0).
                        </p>
                        <p>
                            A single bit conveys very little information. To store complex data like text, colors, or sound, computers group bits together. The standard grouping is 8 bits, known as a <strong>Byte</strong>.
                        </p>
                        <ul className="list-disc ml-6 space-y-2 my-4">
                            <li><strong>1 Bit (b):</strong> A single 0 or 1. Used to measure internet speed (e.g., 100 Megabits per second).</li>
                            <li><strong>1 Byte (B):</strong> 8 bits. Used to measure file storage (e.g., a 5 Megabyte photo).</li>
                        </ul>
                        <p>
                            <strong>Key Takeaway:</strong> Internet speeds are usually marketed in bits (Mbps), while hard drives are marketed in bytes (MB, GB). This is why downloading a 100MB file on a 100Mbps connection takes 8 seconds, not 1 second.
                        </p>

                        <h3 id="part2" className="text-xl font-bold text-white mt-8 mb-4">2. The Great Schism: SI (1000) vs IEC (1024)</h3>
                        <p>
                            This is the core of the confusion. As humans with ten fingers, we naturally count in base-10 (Decimal). We use the Metric system (SI):
                        </p>
                        <ul className="list-disc ml-6 space-y-1 my-2">
                            <li>Kilo = 1,000</li>
                            <li>Mega = 1,000,000</li>
                            <li>Giga = 1,000,000,000</li>
                        </ul>
                        <p>
                            However, computers operate on binary logic (base-2). The closest power of 2 to 1000 is $2^{10}$, which equals <strong>1024</strong>.
                        </p>
                        <p>
                            For decades, the computer industry used the metric prefixes (Kilo, Mega) to refer to binary values. "1 Kilobyte" meant 1024 bytes. But storage manufacturers, realizing that $1000^3$ is smaller than $1024^3$ but sounds the same, decided to strictly follow the SI definition.
                        </p>
                        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500 my-4">
                            <p className="italic text-slate-300">
                                "By defining 1 Gigabyte as 1,000,000,000 bytes instead of 1,073,741,824 bytes, manufacturers 'saved' 73MB of space per GB produced."
                            </p>
                        </div>

                        <h3 id="part3" className="text-xl font-bold text-white mt-8 mb-4">3. Why Windows and Mac OS Disagree</h3>
                        <p>
                            <strong>Windows</strong> has historically stuck to the JEDEC standard, where it uses binary math (1024) but displays metric prefixes (KB, MB, GB). When Windows says "1 GB", it actually means "1 GiB" (1024 MB). This is why a 1TB (Decimal) drive appears as 931 GB (Binary) in Windows.
                        </p>
                        <p>
                            <strong>macOS</strong> (since Snow Leopard 10.6) switched to using Decimal math (1000) for storage. On a Mac, a 1TB hard drive will actually show up as 1TB. This makes it consistent with the box packaging but inconsistent with RAM measurement (which is always binary).
                        </p>
                        <p>
                            <strong>Linux</strong> distributions vary, but many modern distros are moving towards the IEC standard, explicitly using "KiB", "MiB", and "GiB" to avoid ambiguity.
                        </p>

                        <h3 id="part4" className="text-xl font-bold text-white mt-8 mb-4">4. Detailed Unit Breakdown</h3>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-700 text-purple-400">
                                        <th className="py-2 px-4">Unit</th>
                                        <th className="py-2 px-4">Binary (IEC)</th>
                                        <th className="py-2 px-4">Decimal (SI)</th>
                                        <th className="py-2 px-4">Real World Example</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b border-slate-800">
                                        <td className="py-2 px-4 font-bold">Kilobyte</td>
                                        <td className="py-2 px-4">1 KiB = 1,024 B</td>
                                        <td className="py-2 px-4">1 KB = 1,000 B</td>
                                        <td className="py-2 px-4">A short email</td>
                                    </tr>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-2 px-4 font-bold">Megabyte</td>
                                        <td className="py-2 px-4">1 MiB = 1,024 KiB</td>
                                        <td className="py-2 px-4">1 MB = 1,000 KB</td>
                                        <td className="py-2 px-4">An MP3 song (~5MB)</td>
                                    </tr>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-2 px-4 font-bold">Gigabyte</td>
                                        <td className="py-2 px-4">1 GiB = 1,024 MiB</td>
                                        <td className="py-2 px-4">1 GB = 1,000 MB</td>
                                        <td className="py-2 px-4">A standard HD Movie</td>
                                    </tr>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-2 px-4 font-bold">Terabyte</td>
                                        <td className="py-2 px-4">1 TiB = 1,024 GiB</td>
                                        <td className="py-2 px-4">1 TB = 1,000 GB</td>
                                        <td className="py-2 px-4">Modern SSDs</td>
                                    </tr>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-2 px-4 font-bold">Petabyte</td>
                                        <td className="py-2 px-4">1 PiB = 1,024 TiB</td>
                                        <td className="py-2 px-4">1 PB = 1,000 TB</td>
                                        <td className="py-2 px-4">Google Data Centers</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 id="faq" className="text-xl font-bold text-white mt-8 mb-4">6. Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-purple-300">Is 1024 or 1000 correct?</h4>
                                <p>Both are correct in their own context. 1000 is correct for SI (Standard Metric) units. 1024 is correct for IEC (Binary) units. The confusion comes from using SI names (Kilo) for Binary values.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-purple-300">Does this converter handle Bits?</h4>
                                <p>Yes! The tool above displays the total bit count in the breakdown section, allowing you to see the raw binary digits required for storage.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-purple-300">Why do RAM sticks use 1024?</h4>
                                <p>Random Access Memory is addressed directly by the CPU using binary logic. A 16GB RAM stick is physically 16 GiB (17,179,869,184 bytes). RAM is one of the few places where marketing and reality still align on the binary standard.</p>
                            </div>
                        </div>

                        <p className="mt-8 text-sm text-slate-500">
                            Last Updated: October 2023 | Author: HSINI MOHAMED
                        </p>
                    </div>

                    {/* Gradient Overlay when collapsed */}
                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none"></div>
                    )}
                </div>

                {/* Centered Read More Button */}
                <div className="mt-6 flex justify-center relative z-10">
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        {isExpanded ? 'Show Less' : 'Read Full Guide'}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </article>
        </div>
    );
};

export default SeoArticle;