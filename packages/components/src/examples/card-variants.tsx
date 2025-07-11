import { Card, CardContent } from "../core/card/card";

export const CardVariants = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Card 
        className="w-[300px]" 
        variant="outlined"
        title="Outlined Card"
        description="Default outlined card variant."
      >
        <CardContent>
          <p>Content goes here with outlined border.</p>
        </CardContent>
      </Card>

      <Card 
        className="w-[300px]" 
        variant="filled"
        title="Filled Card"
        description="This card has a filled background."
      >
        <CardContent>
          <p>Content goes here with surface 2 background.</p>
        </CardContent>
      </Card>
    </div>
  );
}; 