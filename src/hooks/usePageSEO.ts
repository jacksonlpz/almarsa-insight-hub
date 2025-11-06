import { useEffect, useRef } from 'react';
import { updateDocumentMeta, type SEOData } from '@/lib/seo';

export function usePageSEO(seoData: SEOData) {
  const previousSerializedData = useRef<string>();

  useEffect(() => {
    const serialized = JSON.stringify(seoData ?? {});
    if (previousSerializedData.current === serialized) {
      return;
    }

    previousSerializedData.current = serialized;
    updateDocumentMeta(seoData);

    return () => {
      if (previousSerializedData.current === serialized) {
        previousSerializedData.current = undefined;
      }
    };
  }, [seoData]);
}

export default usePageSEO;
