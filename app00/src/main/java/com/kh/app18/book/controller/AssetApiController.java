package com.kh.app18.book.controller;

import com.kh.app18.book.dto.request.AssetRequestDto;
import com.kh.app18.book.dto.response.AssetResponseDto;
import com.kh.app18.book.service.AssetService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/asset")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin
public class AssetApiController {

    private final AssetService bookService;

    @PostMapping
    public ResponseEntity<AssetResponseDto> save(@RequestBody AssetRequestDto requestDto){
        AssetResponseDto responseDto = bookService.save(requestDto);
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    @GetMapping
    public ResponseEntity<List<AssetResponseDto>> findAll(){
        List<AssetResponseDto> voList = bookService.findAll();
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(voList);
    }

    @GetMapping("{id}")
    public ResponseEntity<AssetResponseDto> findById(@PathVariable Long id){
        AssetResponseDto responseDto = bookService.findById(id);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(responseDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteById(@PathVariable Long id){
        bookService.deleteById(id);
        return ResponseEntity
                .status(HttpStatus.NO_CONTENT)
                .build();

    }

    @PutMapping("{id}")
    public ResponseEntity<AssetResponseDto> updateTitleAndPriceById(@PathVariable Long id, @RequestBody AssetRequestDto requestDto){
        AssetResponseDto responseDto = bookService.updateTitleAndPriceById(id , requestDto);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(responseDto);
    }


}//class
