import {News} from './news.servise';



export class DataService{

    private data: News[] = [
        { title:"Tooday now",
          category: "word",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur cum dicta dolorum enim error, facilis itaque iusto nam neque pariatur quam quas quisquam saepe " +
          "tempore, unde vitae? Aliquid atque doloremque expedita facilis in libero nam nostrum praesentium ratione totam.",
          autor: "Sam Smith"

        },

        { title:"Ukraine week",
          category: "word",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur cum dicta dolorum enim error, facilis itaque iusto nam neque pariatur quam quas quisquam saepe tempore, " +
          "unde vitae? Aliquid atque doloremque expedita facilis in libero nam nostrum praesentium ratione totam.",
          autor: "Sam Smith"

        },

      { title:"Sport turnir football",
        category: "word",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur cum dicta dolorum enim error, facilis itaque iusto nam neque pariatur quam quas quisquam saepe tempore, " +
      "unde vitae? Aliquid atque doloremque expedita facilis in libero nam nostrum praesentium ratione totam.",
        autor: "Sam Smith"

      }
    ];
    getData(): News[] {

        return this.data;
    }
    addData(title: string, category: string, text: string, autor: string){

        this.data.push(new News(name, category, text, autor));
    }
}
