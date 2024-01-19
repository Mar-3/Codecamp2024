export default function searchConfig() {
    const searchConfig ={ filters: 
        {
            "type": {
                "style": "exclude",
                "title": "Notice type",
                "options": {"Looking for...": "lookingFor", "Offering...": "offering", "Selling...": "selling", "Buying...": "buying", "Attention!": "attention"}
        },
            "area": {
                "style": "include"
            },
    },}
    return searchConfig.filters;
  };
