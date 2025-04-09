
const POST_OPTIONS: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

export const post = async <T>(url: string, payload: T, options?: Partial<RequestInit>) => {
    const requestOptions = Object.assign({}, POST_OPTIONS, options);
    const response = await fetch(url, {
        ...requestOptions,
        body: JSON.stringify(payload),
      });
    return await response.json();
}
