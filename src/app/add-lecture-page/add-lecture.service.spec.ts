import { TestBed } from "@angular/core/testing";

import { AddLectureService } from "./add-lecture.service";

describe("AddLectureService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AddLectureService = TestBed.get(AddLectureService);
    expect(service).toBeTruthy();
  });
});
