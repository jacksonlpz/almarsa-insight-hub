// API client for backend communication
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.almarsapro.com';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  urgency?: string;
  message: string;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async makeRequest<T = unknown>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers,
        },
      });

      if (!response.ok) {
        if (response.status === 422) {
          const errorData = await response.json();
          return {
            success: false,
            message: 'Validation errors occurred',
            errors: errorData.errors || {},
          };
        }
        
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const hasBody = response.status !== 204;
      const contentType = response.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');
      const data = hasBody && isJson ? await response.json() : undefined;
      const parsedData = (data ?? {}) as Record<string, unknown>;

      return {
        success: true,
        message: typeof parsedData.message === 'string' ? (parsedData.message as string) : 'Request successful',
        data: (parsedData.data as unknown) ?? data,
      };
    } catch (error: unknown) {
      if (import.meta.env.DEV) {
        console.error('API request failed:', error);
      }
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An unexpected error occurred',
      };
    }
  }

  async submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
    const payload = {
      _subject: `New contact request from ${formData.firstName} ${formData.lastName}`,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone ?? '',
      company: formData.company ?? '',
      service: formData.service ?? '',
      urgency: formData.urgency ?? '',
      message: formData.message,
      _captcha: 'false',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@almarsapro.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      const data = await response.json();
      const success = data.success === true || data.success === 'true';
      return {
        success,
        message: success ? 'Message sent' : data.message || 'Unable to send message',
      };
    } catch (error: unknown) {
      if (import.meta.env.DEV) {
        console.error('Contact form submission failed:', error);
      }
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An unexpected error occurred',
      };
    }
  }

  async subscribeNewsletter(email: string): Promise<ApiResponse> {
    return this.makeRequest('/api/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async checkHealth(): Promise<ApiResponse> {
    return this.makeRequest('/api/health');
  }
}

export const apiClient = new ApiClient();
export type { ContactFormData, ApiResponse };