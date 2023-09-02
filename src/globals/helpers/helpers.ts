import { faker } from '@faker-js/faker';

const getDate = () => {
	const date = faker.date.anytime().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
	return date.toLocaleString();
}

function capitalizeFirstLetter(inputString: string): string {
  // Разделяем строку на строки, используя символ новой строки (\n) в качестве разделителя
  const lines: string[] = inputString.split('\n');

  // Проходим по каждой строке
  const capitalizedLines: string[] = lines.map((line: string) => {
    // Если строка не пустая
    if (line.trim().length > 0) {
      // Делаем первую букву заглавной и объединяем с остальными символами
      return line.charAt(0).toUpperCase() + line.slice(1);
    } else {
      // Если строка пустая, оставляем её без изменений
      return line;
    }
  });

  // Объединяем строки обратно в одну строку с символами новой строки (\n) в качестве разделителей
  const resultString: string = capitalizedLines.join('\n');

  return resultString;
}

export {
	getDate,
	capitalizeFirstLetter
}