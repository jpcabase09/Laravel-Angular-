import { DataService } from './../../services/data.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  data: any

  videoPlaylist1 = [
    {
      name: "Severance - Intro Title Sequence  / Credits / Opening 4K  ( Apple TV+) Official",
      embed: "https://player.vimeo.com/video/680855862"
    },
    {
      name: "Field of Vision - Open Shutters",
      embed: "https://player.vimeo.com/video/684675242"
    },
    {
      name: "Bloody Good Period 'Typically",
      embed: "https://player.vimeo.com/video/688796585"
    },
    {
      name: "2002 (YEAR OF THE HORSE)",
      embed: "https://player.vimeo.com/video/688486307"
    },

    {
      name: "Field of Vision - Open Shutters",
      embed: "https://player.vimeo.com/video/682947787"
    },
    {
      name: "Bloody Good Period 'Typically",
      embed: "https://player.vimeo.com/video/686006480"
    }
  ]

  videoPlaylist2 = [
    {
      name: "Severance - Intro Title Sequence  / Credits / Opening 4K  ( Apple TV+) Official",
      embed: "https://player.vimeo.com/video/680855862"
    },
    {
      name: "Field of Vision - Open Shutters",
      embed: "https://player.vimeo.com/video/680668269"
    },
    {
      name: "Bloody Good Period 'Typically",
      embed: "https://player.vimeo.com/video/656704401"
    },
    {
      name: "2002 (YEAR OF THE HORSE)",
      embed: "https://player.vimeo.com/video/592468585"
    },
    {
      name: "2002 (YEAR OF THE HORSE)",
      embed: "https://player.vimeo.com/video/651735425"
    },
    {
      name: "2002 (YEAR OF THE HORSE)",
      embed: "https://player.vimeo.com/video/644317479"
    }
  ]

  videoPlaylist3 = [
    {
      name: "Severance - Intro Title Sequence  / Credits / Opening 4K  ( Apple TV+) Official",
      embed: "https://player.vimeo.com/video/680855862"
    },
    {
      name: "Field of Vision - Open Shutters",
      embed: "https://player.vimeo.com/video/529254176"
    },
    {
      name: "Bloody Good Period 'Typically",
      embed: "https://player.vimeo.com/video/585391478"
    },
    {
      name: "2002 (YEAR OF THE HORSE)",
      embed: "https://player.vimeo.com/video/542895126"
    },
    {
      name: "2002 (YEAR OF THE HORSE)",
      embed: "https://player.vimeo.com/video/592468585"
    },
    {
      name: "2002 (YEAR OF THE HORSE)",
      embed: "https://player.vimeo.com/video/672204032"
    }
  ]


  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit(): void {
    this.getVideo();
  }

  getEmbedUrl(item: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(item)
  }


  getVideo() {
    this.dataService.getVideo().subscribe(res => {
      this.data = res;
      console.log(this.data)

    })
  }

}
