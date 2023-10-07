import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ImageViewerComponent } from './image-viewer.component';
import { ImageService } from '../image.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

class MockImageService {
  getImage(imageUrl: string) {
    const mockBlob = new Blob(['Mock image data'], { type: 'image/jpeg' });
    return of(mockBlob);
  }
}

describe('ImageViewerComponent', () => {
  let component: ImageViewerComponent;
  let fixture: ComponentFixture<ImageViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageViewerComponent],
      imports: [FormsModule],
      providers: [
        { provide: ImageService, useClass: MockImageService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize selectedName and selectedDivision as null', () => {
    expect(component.selectedName).toBeNull();
    expect(component.selectedDivision).toBeNull();
  });

  it('should load image', () => {
    spyOn(component, 'loadImage').and.callThrough();
    component.loadImage();
    expect(component.loadImage).toHaveBeenCalled();
    // You can add more specific assertions here based on your implementation
  });

  it('should select name', () => {
    const item = { fullName: 'John Doe', division: 'Division A' };
    component.selectName(item);
    expect(component.selectedName).toEqual('John Doe');
    expect(component.selectedDivision).toEqual('Division A');
    // Add more assertions if needed
  });

  it('should paste data on the image', () => {
    const event = new MouseEvent('click', {
      clientX: 100, // Set clientX to your desired value
      clientY: 100, // Set clientY to your desired value
      bubbles: true,
    });

    component.pasteOnImage(event);

    // Test that the text was pasted and copiedText was set
    expect(component.copiedText).toBe('John Doe Division A');

    // You can also test the presence of the pasted element
    const pasteElement = fixture.debugElement.query(By.css('.pasted-text'));
    expect(pasteElement).toBeTruthy();
    expect(pasteElement.nativeElement.textContent).toBe('John Doe Division A');
  });
});
