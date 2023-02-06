import { RcFile } from 'antd/lib/upload';
import html2canvas from 'html2canvas';
import moment from 'moment';

export const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

export const camelToTitleCase = (str: string) =>
  str.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const dateFormat = (str: string) => moment(str).format('YYYY-MM-DD');
export const dateLocaleFormat = (date: Date) => moment(date).format('YYYY-MM-DD hh:mm:ss');
export const timeLocaleFormat = (date: Date) => moment(date).format('HH:mm:ss');

export const camelize = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    .replace(/[&/\\#,+()$~%.'":*?<>{}!@^_]/g, '');

export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
export const getDivImage = async (divId: string, quality: number = 0.5) => {
  const element = document.getElementById(divId);
  if (element) {
    const canvas = await html2canvas(element);

    return canvas.toDataURL('image/png', quality);
  }
  return '';
};
export const filterEmptyRows = (data: any[]) =>
  data.filter((row) => Object.values(row).some((v) => v));
