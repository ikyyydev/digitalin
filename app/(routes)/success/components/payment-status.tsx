"use client";

import Container from "@/components/layouts/container";
import useCart from "@/hooks/use-cart";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const PaymentStatus = () => {
  const searchParams = useSearchParams();
  const removeAll = useCart((state) => state.removeAll);

  const isSuccess = searchParams.get("success") === "true";
  const isCanceled = searchParams.get("canceled") === "true";

  useEffect(() => {
    if (isSuccess) {
      removeAll();
      const timeout = setTimeout(() => {
        window.location.href = "/";
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isSuccess, removeAll]);

  if (!isSuccess && !isCanceled) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold">
            Status Pembayaran Tidak Diketahui
          </h1>
          <p className="mt-4 text-gray-500">
            Silakan periksa halaman riwayat pesanan Anda.
          </p>
        </div>
      </Container>
    );
  }
  return (
    <div
      className={`p-6 text-center rounded-lg shadow-lg ${
        isSuccess ? "bg-green-50" : "bg-red-50"
      }`}
    >
      {isSuccess ? (
        <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
      ) : (
        <XCircle className="w-16 h-16 mx-auto text-red-600" />
      )}

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
        {isSuccess ? "Pembayaran Berhasil!" : "Pembayaran Dibatalkan/Gagal"}
      </h1>

      <p className="mt-2 text-base text-gray-500">
        {isSuccess
          ? "Terima kasih atas pesanan Anda. Kami telah menerima pembayaran Anda dan akan segera memproses pesanan."
          : "Transaksi Anda dibatalkan atau mengalami kegagalan. Silakan coba lagi atau hubungi dukungan."}
      </p>

      <div className="mt-6">
        <Link
          href="/"
          className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-6 py-3 text-base font-medium transition"
        >
          Lanjutkan Belanja
        </Link>
      </div>
    </div>
  );
};
