export interface QRCodeDataProps {
  qrcode: string;
  profile: {
    name: string;
    student_number: string;
    department: string;
  };
  handleRefresh(): void;
}
