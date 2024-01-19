export default function searchConfig() {
    const searchConfig ={ filters: 
        {
            "type": {
                "style": "exclude",
                "title": "Notice type",
                "options": {"Looking for...": "lookingFor", "Offering...": "offering", "Selling...": "selling", "Buying...": "buying", "Attention!": "attention"}
        },
            "area": {
                "style": "include",
                "title": "Area",
                "options": {"Skinnarila": "Skinnarila", "skinnarila": "skinnarila", "Kourula": "Kourula"}
            },
            "nickname": {
                "style": "include",
                "title": "Author",
                "options": {"carjacker22": "carjacker22", "dogwalker22": "dogwalker22", "guitarplayer22": "guitarplayer22", "sewer22": "sewer22"}
            },
    },}
    return searchConfig.filters;
  };