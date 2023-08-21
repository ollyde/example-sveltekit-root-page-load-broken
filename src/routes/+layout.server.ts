
/** @type {import('./$types').PageServerData} */
export async function load({url}) {

    console.log('load layout', url.host);

    return {
      empty: ''
    };
  }