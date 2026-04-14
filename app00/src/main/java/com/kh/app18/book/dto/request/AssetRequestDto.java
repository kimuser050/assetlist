package com.kh.app18.book.dto.request;

import com.kh.app18.book.entity.AssetEntity;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class AssetRequestDto {

    private String title;
    private Integer price;

    public AssetEntity toEntity() {
        return AssetEntity.builder()
                .title(title)
                .price(price)
                .build();
    }

}
