export class SearchResult
{
  id: string;
  title: string;
  description: string;
  thumbnaulUrl: string;
  videoUrl: string;

  constructor(obj: any)
  {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thumbnaulUrl = obj && obj.thumbnaulUrl || null;
    this.videoUrl = obj && obj.videoUrl || 'https://www.youtube.com/watch?v=${this.id}';
  }
}