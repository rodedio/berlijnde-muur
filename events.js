// Events data for the Berlin Wall timeline
const events = {
    nl: {
        title: 'Berlijnse Muur Tijdlijn',
        events: [
            {
                id: 1,
                date: '1945',
                title: 'val Nazi-Duitsland',
                description: 'in 1945 viel Nazi-Duitsland. toen werd duitsland verdeeld in 4 sectoren. frankrijk, de VS, het Verenigd Koninkrijk en de Sovjet-Unie. om dat berlijn in het gebiet van de Sovjest-unie zat haden ze die ook opgesplitst. de frankrijk, vs en het VK hadden een gebied dat ze deelden. deze sectoren waren gescheiden door de berlijnse muur.',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Berlinermauer.jpg/800px-Berlinermauer.jpg'
            },
            {
                id: 2,
                date: '17 augustus 1962',
                title: 'Dood van Peter Fechter',
                description: 'Peter Fechter wordt neergeschoten terwijl hij probeert over de muur te klimmen. Hij sterft na uren van hulpeloosheid.',
                location: { lat: 52.5074, lng: 13.3904 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Peter_Fechter_Memorial.jpg/800px-Peter_Fechter_Memorial.jpg'
            },
            {
                id: 3,
                date: '26 juni 1963',
                title: 'Ich bin ein Berliner',
                description: 'President John F. Kennedy bezoekt West-Berlijn en spreekt zijn beroemde woorden "Ich bin ein Berliner".',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/JFK_in_berlin.jpg/800px-JFK_in_berlin.jpg'
            },
            {
                id: 4,
                date: '12 juni 1987',
                title: 'Tear down this wall',
                description: 'President Ronald Reagan roept Michail Gorbatsjov op om de muur neer te halen met de woorden "Mr. Gorbachev, tear down this wall!"',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Reagan_Brandenburg_Gate_1987.jpg/800px-Reagan_Brandenburg_Gate_1987.jpg'
            },
            {
                id: 5,
                date: '9 november 1989',
                title: 'Val van de Berlijnse Muur',
                description: 'De Berlijnse Muur valt na een aankondiging van de DDR-regering dat burgers vrij mogen reizen.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Berlinermauer.jpg/800px-Berlinermauer.jpg'
            },
            {
                id: 6,
                date: '1961-1989',
                title: 'Checkpoint Charlie',
                description: 'Checkpoint Charlie was de bekendste grensovergang tussen Oost- en West-Berlijn. Het werd een symbool van de Koude Oorlog.',
                location: { lat: 52.5074, lng: 13.3904 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Checkpoint_Charlie_1961.jpg/800px-Checkpoint_Charlie_1961.jpg'
            },
            {
                id: 7,
                date: '1971',
                title: 'Vier-Mogendheden-Akkoord',
                description: 'Het akkoord verbeterde de toegang tot West-Berlijn en verminderde spanningen tussen Oost en West.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Berlin_1971.jpg/800px-Berlin_1971.jpg'
            },
            {
                id: 8,
                date: '1985',
                title: 'Michail Gorbatsjov aan de macht',
                description: 'Gorbatsjov wordt leider van de Sovjet-Unie en introduceert hervormingen (glasnost en perestrojka) die uiteindelijk leiden tot de val van de Muur.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Gorbachev_1987.jpg/800px-Gorbachev_1987.jpg'
            },
            {
                id: 9,
                date: '3 oktober 1990',
                title: 'Duitse Hereniging',
                description: 'Oost- en West-Duitsland worden officieel herenigd, wat het definitieve einde betekent van de deling van Duitsland.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/German_reunification_celebration.jpg/800px-German_reunification_celebration.jpg'
            }
        ]
    },
    de: {
        title: 'Berliner Mauer Zeitleiste',
        events: [
            {
                id: 1,
                date: '13. August 1961',
                title: 'Baubeginn der Berliner Mauer',
                description: 'Die DDR beginnt mit dem Bau der Berliner Mauer, die West-Berlin von Ost-Berlin trennt.',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Berlinermauer.jpg/800px-Berlinermauer.jpg'
            },
            {
                id: 2,
                date: '17. August 1962',
                title: 'Tod von Peter Fechter',
                description: 'Peter Fechter wird erschossen, als er versucht, über die Mauer zu klettern. Er stirbt nach Stunden der Hilflosigkeit.',
                location: { lat: 52.5074, lng: 13.3904 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Peter_Fechter_Memorial.jpg/800px-Peter_Fechter_Memorial.jpg'
            },
            {
                id: 3,
                date: '26. Juni 1963',
                title: 'Ich bin ein Berliner',
                description: 'Präsident John F. Kennedy besucht West-Berlin und spricht seine berühmten Worte "Ich bin ein Berliner".',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/JFK_in_berlin.jpg/800px-JFK_in_berlin.jpg'
            },
            {
                id: 4,
                date: '12. Juni 1987',
                title: 'Tear down this wall',
                description: 'Präsident Ronald Reagan fordert Michail Gorbatschow auf, die Mauer niederzureißen mit den Worten "Mr. Gorbachev, tear down this wall!"',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Reagan_Brandenburg_Gate_1987.jpg/800px-Reagan_Brandenburg_Gate_1987.jpg'
            },
            {
                id: 5,
                date: '9. November 1989',
                title: 'Fall der Berliner Mauer',
                description: 'Die Berliner Mauer fällt nach einer Ankündigung der DDR-Regierung, dass Bürger frei reisen dürfen.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Berlinermauer.jpg/800px-Berlinermauer.jpg'
            },
            {
                id: 6,
                date: '1961-1989',
                title: 'Checkpoint Charlie',
                description: 'Checkpoint Charlie war der bekannteste Grenzübergang zwischen Ost- und West-Berlin. Er wurde zu einem Symbol des Kalten Krieges.',
                location: { lat: 52.5074, lng: 13.3904 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Checkpoint_Charlie_1961.jpg/800px-Checkpoint_Charlie_1961.jpg'
            },
            {
                id: 7,
                date: '1971',
                title: 'Viermächteabkommen',
                description: 'Das Abkommen verbesserte den Zugang zu West-Berlin und reduzierte die Spannungen zwischen Ost und West.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Berlin_1971.jpg/800px-Berlin_1971.jpg'
            },
            {
                id: 8,
                date: '1985',
                title: 'Michail Gorbatschow an der Macht',
                description: 'Gorbatschow wird Führer der Sowjetunion und führt Reformen (Glasnost und Perestroika) ein, die schließlich zum Fall der Mauer führen.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Gorbachev_1987.jpg/800px-Gorbachev_1987.jpg'
            },
            {
                id: 9,
                date: '3. Oktober 1990',
                title: 'Deutsche Wiedervereinigung',
                description: 'Ost- und Westdeutschland werden offiziell wiedervereinigt, was das endgültige Ende der deutschen Teilung bedeutet.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/German_reunification_celebration.jpg/800px-German_reunification_celebration.jpg'
            }
        ]
    }
};

// Export the events data
export default events; 