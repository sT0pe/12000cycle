export enum ROUTES {
	home = 'home',
	actions = 'actions',
	countries = 'countries',

	rulesStack = 'rulesStack',
	rules = 'rules',
	earthquake = 'earthquake',
	flood = 'flood',
	volcanic = 'volcanic',
	tsunami = 'tsunami',
	fires = 'fires',
	hurricane = 'hurricane',
	thunderstorm = 'thunderstorm',
	drought = 'drought',
	tornado = 'tornado',
	solar = 'solar',

	firstAidStack = 'firstAidStack',
	firstAid = 'firstAid',

	suitcase = 'suitcase',

	settingsStack = 'settingsStack',
	settings = 'settings',
	settingsLanguage = 'language',
	settingsContact = 'contact',
	settingsReport = 'report',
	settingsPrivacy = 'privacy',
};

export const HIDE_HEADER_ROUTES = [
	ROUTES.earthquake,
	ROUTES.flood,
	ROUTES.volcanic,
	ROUTES.tsunami,
	ROUTES.fires,
	ROUTES.hurricane,
	ROUTES.thunderstorm,
	ROUTES.drought,
	ROUTES.tornado,
	ROUTES.solar,
	ROUTES.settingsLanguage,
	ROUTES.settingsContact,
	ROUTES.settingsReport,
	ROUTES.settingsPrivacy,
];