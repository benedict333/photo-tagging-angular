import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ImageService } from '../image.service';
import { DataService } from '../data.service'; // Import the DataService

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {
  constructor(private imageService: ImageService, private dataService: DataService) {  this.showDropdown = false; }
  public isDragging: boolean = false;
  public startX: number = 0;
  public startY: number = 0;
  public imageTranslateX: number = 0;
  public imageTranslateY: number = 0;
  

  @ViewChild('imageContainer', { static: true }) imageContainer: ElementRef | undefined;

  imageUrl: string =
    'https://res.cloudinary.com/course4u/image/upload/v1696533308/ghss/photoshop-edited_10_zvsgls.jpg'; // Replace with the actual image URL

  // Properties for selected data
  selectedName: string | null = null;
  selectedDivision: string | null = null;

  // Data received from the service
  dataFromService: any[] = [];

  filteredData: any[] = [];
  searchTerm: string = '';
  showDropdown: boolean = false;

  // Property for copied text
  copiedText: string | null = null;

  // Property for current zoom level
  zoomLevel: number = 100; // 100% initial zoom level

  // Container dimensions for mobile view
  containerWidth: number = window.innerWidth;
  containerHeight: number = window.innerHeight;

  // Function to handle mouse down event
  onMouseDown(event: MouseEvent) {
    if (this.imageContainer) {
      const rect = this.imageContainer.nativeElement.getBoundingClientRect();
      if (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      ) {
        this.isDragging = true;
        this.startX = event.clientX - this.imageTranslateX;
        this.startY = event.clientY - this.imageTranslateY;
      }
    }
  }

  // Function to handle mouse move event
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.imageTranslateX = event.clientX - this.startX;
      this.imageTranslateY = event.clientY - this.startY;
    }
  }

  // Function to handle mouse up event
  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }

  // Function to handle touch start event
  onTouchStart(event: TouchEvent) {
    if (event.touches.length === 1 && this.imageContainer) {
      const touch = event.touches[0];
      const rect = this.imageContainer.nativeElement.getBoundingClientRect();
      if (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      ) {
        this.isDragging = true;
        this.startX = touch.clientX - this.imageTranslateX;
        this.startY = touch.clientY - this.imageTranslateY;
      }
    }
  }

  // Function to handle touch move event
  onTouchMove(event: TouchEvent) {
    if (this.isDragging && event.touches.length === 1) {
      const touch = event.touches[0];
      this.imageTranslateX = touch.clientX - this.startX;
      this.imageTranslateY = touch.clientY - this.startY;
    }
  }

  // Function to handle touch end event
  onTouchEnd(event: TouchEvent) {
    this.isDragging = false;
  }

  ngOnInit(): void {
    this.loadImage();
    this.dataService.getAllData().subscribe((data) => {
      this.dataFromService = data;
      this.filteredData = data; // Initialize filteredData with all data
    });
    this.showDropdown = false;
  }
  

  loadImage() {
    this.imageService.getImage(this.imageUrl).subscribe((imageBlob) => {
      // Create a URL for the image blob
      const imageUrl = URL.createObjectURL(imageBlob);
      // Assign the image URL to an <img> element in your template
      const imgElement = document.getElementById('image') as HTMLImageElement;
      imgElement.src = imageUrl;
    });
  }

// Function to handle name selection
selectName(item: any) {
  console.log('selectName called with:', item);
  // Copy the selected data
  this.selectedName = item.fullName;
  this.selectedDivision = item.division;
  // Hide the dropdown
  this.showDropdown = false;
  // Clear the search term
  this.searchTerm = '';
  // Update the filtered data
  this.filterData();
}


  // Function to paste data on the image
  pasteOnImage(event: MouseEvent) {
    if (this.selectedName) {
      // Check if the click occurred within the image container
      const imgContainer = this.imageContainer?.nativeElement;
      if (imgContainer && imgContainer.contains(event.target as Node)) {
        // Create a new <div> element for pasting the name
        const pasteElement = document.createElement('div');
        pasteElement.textContent = this.selectedName + ' ' + this.selectedDivision;
        pasteElement.className = 'pasted-text';

        // Position the <div> element on the image at the click position
        pasteElement.style.position = 'absolute';
        pasteElement.style.left = event.clientX + 'px';
        pasteElement.style.top = event.clientY + 'px';

        // Append the <div> element to the image container
        imgContainer.appendChild(pasteElement);

        // Set the copiedText property for future reference
        this.copiedText = pasteElement.textContent;

        // Clear the selectedName after pasting
        this.selectedName = null;
        this.selectedDivision = null;
      }
    }
  }

// Function to filter data based on the search term
filterData(isSearchBoxClick: boolean = false) {
  if (this.searchTerm) {
    this.filteredData = this.dataFromService.filter((item) =>
      item.fullName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    // Show the dropdown only if the search box is clicked
    this.showDropdown = isSearchBoxClick;
  } else {
    this.filteredData = [...this.dataFromService]; // Reset to the original data
    // Hide the dropdown when there are no filtered results
    this.showDropdown = false;
  }
}

  // Function to zoom in
  zoomIn() {
    this.zoomLevel += 10; // You can adjust the zoom increment as needed
    this.updateImageSize();
  }

  // Function to zoom out
  zoomOut() {
    this.zoomLevel -= 10; // You can adjust the zoom decrement as needed
    this.updateImageSize();
  }

  // Function to reset zoom to 100%
  resetZoom() {
    this.zoomLevel = 100;
    this.updateImageSize();
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  // Function to update image size based on zoom level
  updateImageSize() {
    if (this.imageContainer) {
      const imgElement = this.imageContainer.nativeElement.querySelector(
        '#image'
      ) as HTMLImageElement;
      if (imgElement) {
        imgElement.style.transform = `scale(${this.zoomLevel / 100})`;
      }
    }
  }
}
