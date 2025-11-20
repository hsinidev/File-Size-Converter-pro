import React, { useState, useMemo } from 'react';
import { FileSizeUnit, ConversionStandard } from '../types';
import { convertFileSize, convertToBytes } from '../lib/conversion';

const FileSizeConverterTool: React.FC = () => {
    const [amount, setAmount] = useState<string>('1');
    const [fromUnit, setFromUnit] = useState<FileSizeUnit>(FileSizeUnit.GB);
    const [toUnit, setToUnit] = useState<FileSizeUnit>(FileSizeUnit.MB);
    const [standard, setStandard] = useState<ConversionStandard>(ConversionStandard.BINARY);
    
    const units = Object.values(FileSizeUnit);
    const standards = Object.values(ConversionStandard);

    const handleSwap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
    };

    const numericAmount = useMemo(() => {
        const clean = amount.replace(/[^\d.]/g, '');
        return parseFloat(clean) || 0;
    }, [amount]);

    const result = useMemo(() => {
        if (numericAmount === 0) return 0;
        return convertFileSize(numericAmount, fromUnit, toUnit, standard);
    }, [numericAmount, fromUnit, toUnit, standard]);

    const bytesValue = useMemo(() => {
        if (numericAmount === 0) return 0;
        return convertToBytes(numericAmount, fromUnit, standard);
    }, [numericAmount, fromUnit, standard]);

    const bitsValue = useMemo(() => bytesValue * 8, [bytesValue]);

    const formatResult = (value: number) => {
        if (value === 0) return '0';
        if (value < 0.0001 && value > 0) return value.toExponential(4);
        return value.toLocaleString('en-US', { maximumFractionDigits: 4 });
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
            <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden relative">
                
                {/* Ambient decorative glows inside the card */}
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -z-10"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-600/20 rounded-full blur-[80px] -z-10"></div>

                {/* Header */}
                <div className="p-8 pb-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white drop-shadow-sm mb-3">
                        File Size Converter
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Instantly convert between <span className="text-purple-400 font-medium">Binary (1024)</span> and <span className="text-pink-400 font-medium">Decimal (1000)</span> storage units with extreme precision.
                    </p>
                </div>

                <div className="p-6 md:p-10 pt-2">
                    
                    {/* Input Section */}
                    <div className="bg-slate-800/30 rounded-2xl p-6 border border-white/5 mb-6">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-end">
                            
                            {/* Left Group */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider ml-1">From</label>
                                <div className="flex gap-3">
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-xl font-mono text-white placeholder-slate-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all shadow-inner"
                                        placeholder="0"
                                    />
                                    <div className="relative min-w-[100px]">
                                        <select
                                            value={fromUnit}
                                            onChange={(e) => setFromUnit(e.target.value as FileSizeUnit)}
                                            className="w-full h-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-4 appearance-none focus:ring-2 focus:ring-purple-500 outline-none font-semibold cursor-pointer hover:bg-slate-750 transition-colors"
                                        >
                                            {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Swap Button */}
                            <div className="flex justify-center pb-1">
                                <button 
                                    onClick={handleSwap} 
                                    className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:scale-110 hover:shadow-purple-500/50 transition-all duration-300 group"
                                    aria-label="Swap Units"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </button>
                            </div>

                            {/* Right Group */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider ml-1">To</label>
                                <div className="flex gap-3">
                                    <div className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-xl font-mono text-purple-300 shadow-inner flex items-center overflow-hidden">
                                        {formatResult(result)}
                                    </div>
                                    <div className="relative min-w-[100px]">
                                        <select
                                            value={toUnit}
                                            onChange={(e) => setToUnit(e.target.value as FileSizeUnit)}
                                            className="w-full h-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-4 appearance-none focus:ring-2 focus:ring-purple-500 outline-none font-semibold cursor-pointer hover:bg-slate-750 transition-colors"
                                        >
                                            {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    {/* Standard Toggle - Enhanced */}
                    <div className="mb-8 flex flex-col items-center">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Calculation Standard</label>
                        <div className="flex p-1.5 bg-slate-950 rounded-2xl border border-slate-800 w-full max-w-lg relative shadow-inner">
                            <div 
                                className="absolute h-[calc(100%-0.75rem)] w-[calc(50%-0.375rem)] bg-slate-800 rounded-xl transition-all duration-300 ease-out border border-slate-600 shadow-md top-1.5"
                                style={{ left: standard === ConversionStandard.BINARY ? '0.375rem' : 'calc(50% + 0rem)' }}
                            ></div>
                            {standards.map(std => (
                                <button
                                    key={std}
                                    onClick={() => setStandard(std)}
                                    className={`relative flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-colors z-10 ${standard === std ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    {std}
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-slate-500 mt-2">
                            {standard === ConversionStandard.BINARY ? "Using 1024 (Windows / RAM Standard)" : "Using 1000 (Storage Manufacturers Standard)"}
                        </p>
                    </div>

                    {/* Advanced Stats Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="group bg-slate-800/40 hover:bg-slate-800/60 transition-colors p-5 rounded-2xl border border-slate-700/50 flex flex-col items-start">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Raw Bytes</p>
                            </div>
                            <p className="font-mono text-white text-lg break-all leading-tight">
                                {formatResult(bytesValue)} <span className="text-slate-500 text-sm">B</span>
                            </p>
                        </div>
                        <div className="group bg-slate-800/40 hover:bg-slate-800/60 transition-colors p-5 rounded-2xl border border-slate-700/50 flex flex-col items-start">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Raw Bits</p>
                            </div>
                            <p className="font-mono text-white text-lg break-all leading-tight">
                                {formatResult(bitsValue)} <span className="text-slate-500 text-sm">b</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FileSizeConverterTool;