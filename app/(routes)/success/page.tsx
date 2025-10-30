import Container from "@/components/layouts/container";
import { PaymentStatus } from "./components/payment-status";

const SuccessPage = () => {
  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <PaymentStatus />
        </div>
      </div>
    </Container>
  );
};

export default SuccessPage;
