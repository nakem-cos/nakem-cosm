import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FooterProps {
  copyright: string;
  tagline: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-serif text-brand-dark">{title}</h2>
          <button onClick={onClose} className="text-brand-gray hover:text-brand-dark transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="px-6 py-6 text-sm text-brand-dark/80 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ copyright, tagline }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer id="footer" className="bg-brand-dark text-brand-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-beige/10 pb-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img src="/logo_white.png" alt="NAKEM" className="h-8 mb-6" />
              <p className="text-brand-beige/60 max-w-sm font-light text-sm leading-relaxed whitespace-pre-line">
                {tagline}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-green">Contact</h3>
              <ul className="space-y-4 text-sm text-brand-beige/60 font-light">
                <li>Email: hello@nakem.co.kr</li>
                <li>Seoul, South Korea</li>
                <li>+82 2-0000-0000</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-green">Social</h3>
              <ul className="space-y-4 text-sm text-brand-beige/60 font-light">
                <li><a href="#" className="hover:text-brand-green transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Youtube</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-brand-beige/40">
            <p>{copyright}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-brand-beige transition-colors">Privacy Policy</button>
              <button onClick={() => setTermsOpen(true)} className="hover:text-brand-beige transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <div className="space-y-6">
          <p className="text-brand-dark/60 italic">최종 수정일: 2025년 1월 1일</p>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">1. 개인정보처리방침 안내</h3>
            <p>NAKEM(이하 "회사")은 고객님의 개인정보를 소중히 여기며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본 개인정보처리방침은 회사가 운영하는 웹사이트(nakem.co.kr)에서의 개인정보 처리에 관한 사항을 안내합니다.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">2. 개인정보 수집 항목 및 방법</h3>
            <p className="mb-2">본 웹사이트는 회원가입 절차 없이 운영되는 브랜드 소개 사이트입니다. 다만, 아래의 경우 최소한의 개인정보가 수집될 수 있습니다:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>이메일 문의 시: 이메일 주소, 문의 내용</li>
              <li>자동 수집 정보: 접속 IP, 브라우저 종류, 접속 일시, 서비스 이용 기록</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">3. 개인정보 수집 및 이용 목적</h3>
            <p className="mb-2">수집된 개인정보는 다음의 목적으로만 이용됩니다:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>고객 문의에 대한 응대 및 처리</li>
              <li>웹사이트 이용 통계 분석 및 서비스 개선</li>
              <li>불법적인 이용 방지 및 서비스 안정성 확보</li>
            </ul>
            <p className="mt-2">수집된 정보는 마케팅, 광고성 정보 전송 등의 목적으로 활용되지 않습니다.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">4. 개인정보 보유 및 이용 기간</h3>
            <p className="mb-2">회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>이메일 문의 기록: 문의 처리 완료 후 1년</li>
              <li>접속 기록: 3개월 (통신비밀보호법에 따름)</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">5. 개인정보의 제3자 제공</h3>
            <p>회사는 원칙적으로 고객님의 개인정보를 외부에 제공하지 않습니다. 다만, 법령에 의해 요구되는 경우에 한하여 관계 기관에 제공될 수 있습니다.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">6. 쿠키(Cookie) 사용</h3>
            <p className="mb-2">본 웹사이트는 사용자 경험 향상 및 통계 분석을 위해 쿠키를 사용할 수 있습니다. 쿠키는 웹사이트 운영에 필수적인 정보를 저장하는 작은 텍스트 파일입니다.</p>
            <p>브라우저 설정을 통해 쿠키 저장을 거부하실 수 있으나, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">7. 개인정보의 안전성 확보 조치</h3>
            <p className="mb-2">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>개인정보 접근 권한 최소화</li>
              <li>SSL 암호화 통신 적용</li>
              <li>정기적인 보안 점검 실시</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">8. 정보주체의 권리</h3>
            <p>고객님은 언제든지 본인의 개인정보에 대한 열람, 정정, 삭제, 처리정지를 요청하실 수 있습니다. 관련 요청은 아래 연락처로 문의해 주시기 바랍니다.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">9. 개인정보 보호책임자</h3>
            <ul className="list-none space-y-1">
              <li>담당부서: 고객서비스팀</li>
              <li>이메일: hello@nakem.co.kr</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">10. 개인정보처리방침 변경</h3>
            <p>본 개인정보처리방침은 법령 또는 회사 정책의 변경에 따라 수정될 수 있으며, 변경 시 웹사이트를 통해 공지합니다.</p>
          </section>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
        <div className="space-y-6">
          <p className="text-brand-dark/60 italic">최종 수정일: 2025년 1월 1일</p>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">1. 목적</h3>
            <p>본 이용약관은 NAKEM(이하 "회사")이 운영하는 웹사이트(nakem.co.kr)에서 제공하는 서비스의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">2. 서비스 개요</h3>
            <p className="mb-2">본 웹사이트는 NAKEM 브랜드 및 제품 정보를 제공하는 소개 페이지로, 다음과 같은 서비스를 제공합니다:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>브랜드 스토리 및 철학 소개</li>
              <li>제품 정보 및 성분 안내</li>
              <li>고객 문의 접수</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">3. 지적재산권</h3>
            <p className="mb-2">본 웹사이트에 게시된 모든 콘텐츠에 대한 저작권 및 지적재산권은 회사에 귀속됩니다:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>텍스트, 이미지, 로고, 디자인 등 모든 시각적 요소</li>
              <li>제품 설명, 성분 정보, 브랜드 스토리 등 모든 문서 콘텐츠</li>
              <li>웹사이트의 구조, 편집 형태, 소프트웨어</li>
            </ul>
            <p className="mt-2">이용자는 회사의 사전 서면 동의 없이 본 콘텐츠를 복제, 배포, 전송, 수정, 2차적 저작물 작성 등에 이용할 수 없습니다.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">4. 이용자의 의무</h3>
            <p className="mb-2">이용자는 다음 행위를 하여서는 안 됩니다:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>타인의 정보 도용 또는 허위 정보 제공</li>
              <li>회사의 지적재산권 침해</li>
              <li>웹사이트 운영을 방해하거나 시스템에 위해를 가하는 행위</li>
              <li>기타 관련 법령에 위반되는 행위</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">5. 제품 정보 및 면책</h3>
            <p className="mb-2">본 웹사이트에 게시된 제품 정보에 관하여:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>제품의 효과는 개인의 피부 타입, 사용 방법 등에 따라 다를 수 있습니다</li>
              <li>제품 이미지는 실제 제품과 색상, 디자인이 다소 상이할 수 있습니다</li>
              <li>제품 정보는 최신 상태로 유지하기 위해 노력하나, 변경 사항이 즉시 반영되지 않을 수 있습니다</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">6. 서비스 이용의 제한</h3>
            <p>회사는 다음의 경우 서비스 이용을 제한할 수 있습니다:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>시스템 정기 점검, 보수, 교체 등의 경우</li>
              <li>천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우</li>
              <li>이용자가 본 약관을 위반한 경우</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">7. 서비스 변경 및 개선</h3>
            <p>회사는 더 나은 서비스 제공을 위해 웹사이트의 내용, 디자인, 기능 등을 지속적으로 개선할 수 있습니다. 중요한 변경 사항이 있을 경우 웹사이트를 통해 사전 공지합니다.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">8. 손해배상</h3>
            <p>회사는 무료로 제공하는 서비스 이용과 관련하여 회사의 고의 또는 중대한 과실이 없는 한 이용자에게 발생한 손해에 대해 책임을 지지 않습니다.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">9. 분쟁 해결</h3>
            <p className="mb-2">본 약관과 관련하여 분쟁이 발생한 경우:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>회사와 이용자는 상호 협의하여 원만히 해결하도록 노력합니다</li>
              <li>협의가 이루어지지 않을 경우, 관련 법령에 따른 절차를 따릅니다</li>
              <li>본 약관의 해석 및 적용은 대한민국 법률에 따릅니다</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">10. 약관의 개정</h3>
            <p>회사는 필요한 경우 본 약관을 개정할 수 있으며, 개정된 약관은 웹사이트에 공지함으로써 효력이 발생합니다. 이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-dark mb-2">11. 문의</h3>
            <p>본 약관에 대한 문의사항은 아래 연락처로 문의해 주시기 바랍니다:</p>
            <ul className="list-none space-y-1 mt-2">
              <li>이메일: hello@nakem.co.kr</li>
              <li>주소: 서울특별시</li>
            </ul>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default Footer;
