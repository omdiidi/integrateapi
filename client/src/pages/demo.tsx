import { Navbar } from "@/components/layout/Navbar";
import { useEffect, useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Disc3, Camera, ImageOff, Sparkles, X, MapPin, Printer, Save, Minus, Plus, Info, HelpCircle } from "lucide-react";

function getSourceMessage(src: string | null): string {
    switch (src) {
        case "qr":
            return "You scanned a QR code, perfect! You are in the right place.";
        case "email":
            return "You came from an email, great! You are in the right place.";
        case "card":
            return "You came from a card, awesome! You are in the right place.";
        default:
            return "If you came from a card or email, you are in the right place. You can click around safely.";
    }
}

interface WelcomeModalProps {
    open: boolean;
    onClose: () => void;
}

function WelcomeModal({ open, onClose }: WelcomeModalProps) {
    const [sourceMessage, setSourceMessage] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const src = params.get("src");
        setSourceMessage(getSourceMessage(src));
    }, []);

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
            <DialogContent hideCloseButton className="max-w-lg p-0 gap-0 overflow-hidden border-0 shadow-2xl bg-gradient-to-b from-white to-slate-50 max-h-[90vh] overflow-y-auto">
                {/* Header with gradient */}
                <div className="relative bg-gradient-to-r from-[#007AFF] to-[#5856D6] p-5 pb-6">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-90"
                        aria-label="Close"
                    >
                        <X className="h-5 w-5 text-white" />
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                            <Disc3 className="h-5 w-5 text-white" />
                        </div>
                        <DialogHeader className="p-0">
                            <DialogTitle className="text-lg font-bold text-white">
                                Welcome, this is a live demo
                            </DialogTitle>
                        </DialogHeader>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                        {sourceMessage}
                    </p>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                    <p className="text-slate-600 text-sm">
                        This shows the day-to-day loop for a record shop. <strong>Start by clicking the Scan tile.</strong>
                    </p>

                    {/* Step 1: Image or No Image */}
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 space-y-2">
                        <p className="font-medium text-slate-800 text-sm">
                            👉 When you click <span className="text-[#007AFF] font-semibold">Scan</span>, you'll see two options:
                        </p>
                        <div className="flex gap-2">
                            <div className="flex-1 bg-white rounded-lg p-2 border border-slate-200 text-center hover:border-[#007AFF] hover:shadow-md transition-all cursor-pointer">
                                <Camera className="h-4 w-4 mx-auto mb-1 text-[#007AFF]" />
                                <p className="text-xs font-medium text-slate-700">Image</p>
                                <p className="text-[9px] text-slate-500">Use camera</p>
                            </div>
                            <div className="flex-1 bg-white rounded-lg p-2 border border-slate-200 text-center hover:border-[#5856D6] hover:shadow-md transition-all cursor-pointer">
                                <ImageOff className="h-4 w-4 mx-auto mb-1 text-[#5856D6]" />
                                <p className="text-xs font-medium text-slate-700">No Image</p>
                                <p className="text-[9px] text-slate-500">Enter manually</p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500">
                            Choose <strong>No Image</strong> if you don't have a camera.
                        </p>
                    </div>

                    {/* Step 2: After entering details - Reference UI */}
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-3">
                        <p className="font-medium text-slate-800 text-sm">
                            📋 After entering details, you'll see this panel:
                        </p>

                        {/* Mock UI - Checkboxes */}
                        <div className="bg-white rounded-lg border border-slate-200 p-3 space-y-3">
                            {/* Channels */}
                            <div className="flex flex-wrap gap-3 text-xs">
                                <label className="flex items-center gap-1.5 cursor-pointer">
                                    <div className="w-4 h-4 rounded border-2 border-[#7C3AED] flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-sm bg-[#7C3AED]" />
                                    </div>
                                    <span className="text-slate-700">In Store</span>
                                </label>
                                <label className="flex items-center gap-1.5 cursor-pointer">
                                    <div className="w-4 h-4 rounded border-2 border-slate-300" />
                                    <span className="text-slate-600">Online</span>
                                </label>
                                <label className="flex items-center gap-1.5 cursor-pointer">
                                    <div className="w-4 h-4 rounded border-2 border-slate-300" />
                                    <span className="text-slate-600">Hold</span>
                                </label>
                                <label className="flex items-center gap-1.5 cursor-pointer">
                                    <div className="w-4 h-4 rounded border-2 border-slate-300" />
                                    <span className="text-slate-600">Network</span>
                                </label>
                                <Info className="w-3.5 h-3.5 text-slate-400" />
                            </div>

                            {/* Quantity & Location */}
                            <div className="flex items-center gap-3 text-xs">
                                <span className="text-slate-600">Qty:</span>
                                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                                    <button className="px-2 py-1 hover:bg-slate-50 text-slate-400">
                                        <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="px-3 py-1 text-slate-800 font-medium border-x border-slate-200">1</span>
                                    <button className="px-2 py-1 hover:bg-slate-50 text-slate-400">
                                        <Plus className="w-3 h-3" />
                                    </button>
                                </div>
                                <button className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                                    <MapPin className="w-3 h-3" />
                                    <span>Location</span>
                                </button>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2">
                                <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-200 rounded-lg text-slate-700 text-xs font-medium hover:bg-slate-50">
                                    <Save className="w-3.5 h-3.5" />
                                    Save as Draft
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#7C3AED] text-white rounded-lg text-xs font-medium hover:bg-[#6D28D9]">
                                    <Printer className="w-3.5 h-3.5" />
                                    Print
                                </button>
                            </div>
                        </div>

                        <p className="text-xs text-slate-500">
                            Check the boxes to choose where this item appears. Click <strong>Print</strong> to create a QR label.
                        </p>
                    </div>

                    {/* Quick Overview */}
                    <div className="space-y-1.5">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">The full loop:</p>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="w-4 h-4 rounded-full bg-[#007AFF] text-white flex items-center justify-center text-[9px] font-bold">1</span>
                            <span>Scan → add a record and print a QR label</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="w-4 h-4 rounded-full bg-[#5856D6] text-white flex items-center justify-center text-[9px] font-bold">2</span>
                            <span>Online → choose where it appears</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="w-4 h-4 rounded-full bg-[#34C759] text-white flex items-center justify-center text-[9px] font-bold">3</span>
                            <span>Sold → scan QR or mark sold, removed automatically</span>
                        </div>
                    </div>

                    {/* Note */}
                    <p className="text-xs text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3" />
                        For full automation, we connect this to a modern POS like Square.
                    </p>

                    {/* Begin Button */}
                    <div className="pt-2">
                        <Button
                            onClick={handleClose}
                            className="w-full bg-[#007AFF] hover:bg-[#0062CC] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] h-12 text-base font-semibold"
                        >
                            Begin Exploring
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function Demo() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Show modal after delay
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 450);
        return () => clearTimeout(timer);
    }, []);

    const handleOpenInstructions = useCallback(() => {
        setShowModal(true);
    }, []);

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Navbar />

            {/* View Instructions Button - Centered */}
            <div className="fixed top-24 left-0 right-0 z-40 flex justify-center">
                <button
                    onClick={handleOpenInstructions}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-105 text-sm font-medium text-slate-700"
                >
                    <HelpCircle className="w-4 h-4 text-[#007AFF]" />
                    View Instructions
                </button>
            </div>

            <iframe
                src="https://vinyl-vault-backend--u1599608.replit.app/"
                title="Demo Application"
                className="fixed left-0 w-full border-0"
                style={{
                    top: "80px",
                    height: "calc(100vh - 80px)",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />

            <WelcomeModal open={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
}
