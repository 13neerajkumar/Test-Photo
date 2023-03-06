import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showBoxes();
  }


  imgClick(src:any)
  {
    this.srcmain="";
    this.srcmain=src;
  }
  
  allImages:any = [];
  allBoxes:any = [];
  srcmain='';
  showBoxes()
  {   
    for(let i=1;i<=6;i++)
    {
        this.allBoxes.push({id:i,img:''})
    }   
  }

  photochange(event:any,id:any)
  {
    for(let i=0;i<this.allBoxes.length;i++)
    {
        if(this.allBoxes[i].img == '')
        {
            this.allBoxes[i].img = event.target.files[0];   
            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();
              reader.onload = (event:any) => {
                this.allBoxes[i].img = event.target.result;
              }
              reader.readAsDataURL(event.target.files[0]);
              break;
            }
        }
    }
  }

  deleteImg(id:any)
  {

    for(let i=0;i<this.allBoxes.length;i++)
    {
        for(let j=i+1;j<this.allBoxes.length-1;j++)
        {
            if(this.allBoxes[i].id == id)
            {
                this.allBoxes[i].img = '';
                alert('Deleted Successfully');
                this.allBoxes[i].img = this.allBoxes[j].img;
                this.allBoxes[j].img = '';

                i++;
                j++;
    
             }
        }
    }
    console.warn(this.allBoxes);
}

}
