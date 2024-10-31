import React from 'react';
import Footer from '@/shared/ui/Footer';
import Header from '@/shared/ui/Header';

type CommonPageTemplateProps = {
  children: React.ReactNode
}

const CommonPageTemplate: React.FC<CommonPageTemplateProps> = ({
  children,
}: CommonPageTemplateProps) => (
  <>
    <Header title="This is Next.js Template" />
    <div className="pt-3">{children}</div>
    <Footer />
  </>
)

export default CommonPageTemplate
