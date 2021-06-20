// Lembrar de tirar
interface IStablishment {
	nome: string,
	cnpj: string,
	latitude: number,
	longitude: number,
	capacidade: string,
	lotacao: string,
}

export const stablishments = [
	{
		nome: "Minha Casa",
		cnpj: "12345678912345",
		latitude: -7.15343535499655,
		longitude: -34.80954028666019,
		capacidade: "10",
		lotacao: "Baixo",
	},
	{
		nome: "Bemais",
		cnpj: "12121212121212",
		latitude: -7.1110388,
		longitude: -34.8272501,
		capacidade: "100",
		lotacao: "Moderado",
	},
	{
		nome: "Seu Dede",
		cnpj: "98765432198765",
		latitude: -7.1097654,
		longitude: -34.8322105,
		capacidade: "150",
		lotacao: "Cheio",
	},
	{
		nome: "Cacau Show",
		cnpj: "12345678987654",
		latitude: -7.1113224,
		longitude: -34.8318124,
		capacidade: "2",
		lotacao: "Baixo",
	},
] as IStablishment[]
