### Weather App

A aplicação Weather App fornece informações em tempo real sobre o clima de qualquer cidade especificada pelo usuário. Utilizando APIs terceirizadas para obter dados climáticos e bandeiras dos países, a aplicação oferece uma interface simples e intuitiva para visualizar essas informações.

## Funcionalidades

- Exibir temperatura atual, descrição do clima, ícone do clima, umidade e velocidade do vento de uma cidade especificada.
- Mostrar a bandeira do país correspondente à cidade pesquisada.
- Atualização em tempo real ao pesquisar por uma nova cidade.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- [OpenWeather API](https://openweathermap.org/api)
- [Flags API](https://flagsapi.com)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/weather-app.git
    cd weather-app
    ```

2. Abra o arquivo `index.html` no seu navegador.

## Uso

1. Digite o nome de uma cidade no campo de entrada.
2. Clique no botão de busca ou pressione Enter.
3. As informações climáticas da cidade e a bandeira do país correspondente serão exibidas.

## Código

### Variáveis e Seleção de Elementos

```javascript
const apiCountryURL = "https://flagsapi.com/BE/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");

const countryElement = document.querySelector("#country");

const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");
```

### Funções

#### Função para obter dados climáticos

```javascript
const getWeatherData = async (city) => {
	const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

	const res = await fetch(apiWeatherURL);
	const data = await res.json();

	return data;
};
```

#### Função para mostrar os dados climáticos

```javascript
const showWeatherData = async (city) => {
	const data = await getWeatherData(city);

	cityElement.innerText = data.name;
	tempElement.innerText = parseInt(data.main.temp);
	descElement.innerText = data.weather[0].description;
	weatherIconElement.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
	);

	countryElement.setAttribute(
		"src",
		`https://cors-anywhere.herokuapp.com/https://flagsapi.com/${data.sys.country}/flat/64.png`
	);

	humidityElement.innerText = `${data.main.humidity}%`;
	windElement.innerText = `${data.wind.speed}km/h`;

	weatherContainer.classList.remove("hide");
};
```

### Eventos

#### Evento de clique no botão de busca

```javascript
searchBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const city = cityInput.value;
	showWeatherData(city);
});
```

#### Evento de pressionar a tecla Enter no campo de entrada

```javascript
cityInput.addEventListener("keyup", (e) => {
	if (e.code === "Enter") {
		const city = e.target.value;
		showWeatherData(city);
	}
});
```

## Notas

- Foi utilizado o proxy `https://cors-anywhere.herokuapp.com/` para contornar problemas de CORS ao acessar a API de bandeiras.
- Lembre-se de substituir a chave da API (`apiKey`) pela sua própria chave obtida no [OpenWeather API](https://openweathermap.org/api).

## Contribuição

1. Fork este repositório.
2. Crie sua feature branch: `git checkout -b minha-nova-feature`.
3. Commit suas alterações: `git commit -am 'Adicionei uma nova feature'`.
4. Push para a branch: `git push origin minha-nova-feature`.
5. Envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
