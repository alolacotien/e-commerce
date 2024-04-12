namespace API.Entities;

public class Basket
{
    public int Id { get; set; }
    public string BuyerId { get; set; }

    // new() đảm bảo Items ko bao h null. Tránh lỗi NullReferenceExeption
    public List<BasketItem> Items { get; set; } = new();

    public void AddItem(Product product, int quantity)
    {
        // duyệt các item giống foreach
        if (Items.All(item => item.ProductId != product.Id))
        {
            Items.Add(new BasketItem { Product = product, Quantity = quantity });
        }

        var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);
        if (existingItem != null)
        {
            existingItem.Quantity += quantity;
        }
    }
}