export class DBUActorSheet extends ActorSheet {
    

    static get defaultOptions() {
        const defaults = super.defaultOptions;
        const overrides = {
            template: "systems/DBU/templates/actor/actor-sheet.hbs",
            tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "tab1" }]
    
        };
        

        return mergeObject(defaults, overrides);
    }

    getData() {

    }

    activateListeners(html) {
        
        super.activateListeners(html);
        $('#connectionForm').submit(async function () {



        });
    }

} 
